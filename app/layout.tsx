import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import '../styles/globals.scss';
import { proximaNova } from './fonts';

export const metadata: Metadata = {
  title: 'Inchapin',
  description: 'Дом бизнес-класса для ценителей роскоши',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={proximaNova.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
