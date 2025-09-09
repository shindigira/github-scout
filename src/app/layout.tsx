import '@/styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { TRPCReactProvider } from '@/trpc/react';
import { HydrateClient } from '@/trpc/server';

export const metadata: Metadata = {
  title: 'GitHub Scout',
  description: 'Explore and manage your GitHub repositories',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${geist.variable}`}>
        <body className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <TRPCReactProvider>
            <HydrateClient>{children}</HydrateClient>
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
