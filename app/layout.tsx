import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Woaties - Premium Crypto Meme Coins & NFTs Platform',
  description: 'Explore the exciting world of cryptocurrency with our comprehensive all-in-one platform featuring meme coins, NFTs, Play-To-Earn, crypto fashion, and mobile apps.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}