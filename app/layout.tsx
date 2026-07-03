import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import '@/styles/globals.scss';
import { proximaNova } from '@/constants/fonts';

export const metadata: Metadata = {
  title: 'INCHAPIN',
  description: 'Дом бизнес-класса для ценителей роскоши',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={proximaNova.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
