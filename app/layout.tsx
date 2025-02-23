import './globals.css';
import type { Metadata } from 'next';
import { Arsenal, Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

const headerFont = Arsenal({ subsets: ['latin'], weight: '700', variable: '--font-header' });

export const metadata: Metadata = {
  title: 'Tega Cay Animal Hospital',
  description: 'Professional and compassionate veterinary care for your pets',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${headerFont.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
                {/* Navigation Bar */}
      <nav className="bg-primary text-primary-foreground w-full z-50">
        <div className="mx-6 p-4">
          <div className="flex items-center h-16">
            <div>
              <Link href="/" className="flex items-center gap-6">
                <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/tcah-logo-white.svg" alt="Tega Cay Animal Hospital Logo" width={40} height={40} />
              <h1 className="text-3xl font-bold">Tega Cay Animal Hospital</h1>
              </Link>
                  </div>
                </div>
              </div>
            </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}