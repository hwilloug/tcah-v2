import './globals.css';
import type { Metadata } from 'next';
import { Arsenal, Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}