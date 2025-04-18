import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import ContactNotification from '@/components/emails/ContactNotification';
import AutoReply from '@/components/emails/AutoReply';
import { contactFormSchema } from '@/lib/validations/contact';

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);
const YOUR_EMAIL = process.env.YOUR_EMAIL||"vijayvelaga31@gmail.com";

// Initialize Redis client for rate limiting
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Create rate limiter - 5 requests per 60 seconds per IP
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '60 s'),
  analytics: true,
});

export async function POST(req: Request) {
  try {
    // Get client IP for rate limiting
    const ip = req.headers.get('x-forwarded-for') || 'anonymous';
    
    // Apply rate limiting
    const { success, limit, reset, remaining } = await ratelimit.limit(ip);
    
    if (!success) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': reset.toString()
          }
        }
      );
    }
    
    // Parse and validate form data
    const body = await req.json();
    const result = contactFormSchema.safeParse(body);
    
    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        { error: 'Validation failed', issues: result.error.format() },
        { status: 400 }
      );
    }
    
    const { name, email, message } = result.data;
    
    // Send notification email to yourself
    const notificationResult = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use verified domain in production
      to: YOUR_EMAIL,
      subject: `New Contact from ${name}`,
      replyTo: email,
      react: ContactNotification({ name, email, message }),
    });
    
    // Send auto-reply to the sender
    const autoReplyResult = await resend.emails.send({
      from: 'Vijay <onboarding@resend.dev>', // Use verified domain in production
      to: email,
      subject: 'Thank you for your message',
      react: AutoReply({ name }),
    });
    
    // Log success results (helpful for debugging)
    console.log('Email notification sent:', notificationResult);
    console.log('Auto-reply sent:', autoReplyResult);
    
    return NextResponse.json(
      { 
        message: 'Message sent successfully',
        notification: notificationResult,
        autoReply: autoReplyResult
      },
      { status: 200 }
    );
    
  } catch (error) {
    // Log the actual error for debugging
    console.error('Error sending email:', error);
    
    // Return a friendly error message to the client
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
