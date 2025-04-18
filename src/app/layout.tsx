import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vijay | Software Developer',
  description:
    'Portfolio website of Vijay, a full-stack developer specializing in Next.js, AWS, and AI implementations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
