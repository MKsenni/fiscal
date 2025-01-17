import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/header/header';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Бухгалетрские услуги',
  description:
    'Предоставление бухгалтерских услуг бухгалетерским кабинетом Елены Шевердиной',
  keywords: [
    'бухгалтер',
    'бухгалтерия',
    'бухгалтерские услуги',
    'налоговая помощь',
    'декларация',
    'заполнение декларации',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className + ' text-xs md:text-sm lg:text-base'}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
