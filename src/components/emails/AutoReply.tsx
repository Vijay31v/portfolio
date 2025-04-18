import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

interface AutoReplyProps {
  name: string;
}

export default function AutoReply({ name }: AutoReplyProps) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting me</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="bg-white p-8 rounded-lg shadow-lg my-10 mx-auto max-w-xl">
            <Heading className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Thank You for Your Message
            </Heading>

            <Section>
              <Text className="text-gray-700 mb-4">Hello {name},</Text>

              <Text className="text-gray-700 mb-4">
                Thank you for reaching out to me through my portfolio website.
                I&apos;ve received your message and will get back to you as soon
                as possible.
              </Text>

              <Text className="text-gray-700 mb-6">
                In the meantime, feel free to check out my GitHub profile or
                connect with me on LinkedIn.
              </Text>

              <Hr className="border border-gray-200 my-6" />

              <Text className="text-sm text-gray-600 text-center">
                Best regards,
                <br />
                Vijay
                <br />
                <Link
                  href="https://yourportfolio.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  yourportfolio.com
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
