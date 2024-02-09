import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/header/header';

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
    'ленусикшевердина',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' text-xs md:text-sm lg:text-base'}>
        <Header />
        {children}
      </body>
    </html>
  );
}