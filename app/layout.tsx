import type { Metadata } from "next";

import localFont from 'next/font/local'
import "./globals.scss";

export const proximaNova = localFont({
  src: [
    {
      path: "../public/fonts/ProximaNova/ProximaNova-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/ProximaNova/ProximaNova-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ProximaNova/ProximaNova-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/ProximaNova/ProximaNova-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-proxima-nova",
  display: "swap",

});
export const metadata: Metadata = {
  title: "Inchapin",
  description: "Дом бизнес-класса для ценителей роскоши",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={proximaNova.className}
    >
      <body>{children}</body>
    </html>
  );
}
