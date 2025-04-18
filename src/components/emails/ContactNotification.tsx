import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

interface ContactNotificationProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactNotification({
  name,
  email,
  message,
}: ContactNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio website</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="bg-white p-8 rounded-lg shadow-lg my-10 mx-auto max-w-xl">
            <Heading className="text-2xl font-bold text-gray-800 mb-6">
              New Contact Form Submission
            </Heading>

            <Section className="mb-6">
              <Text className="text-gray-700 mb-4">
                You&apos;ve received a new message from your portfolio website:
              </Text>

              <Section className="bg-gray-50 p-4 rounded border border-gray-200">
                <Text className="font-medium text-gray-800">
                  <strong>Name:</strong> {name}
                </Text>
                <Text className="font-medium text-gray-800">
                  <strong>Email:</strong> {email}
                </Text>
                <Hr className="border border-gray-200 my-4" />
                <Text className="font-medium text-gray-800">
                  <strong>Message:</strong>
                </Text>
                <Text className="text-gray-700 whitespace-pre-wrap">
                  {message}
                </Text>
              </Section>
            </Section>

            <Hr className="border border-gray-200 my-6" />

            <Text className="text-sm text-gray-600 text-center">
              This message was sent from your portfolio contact form.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
