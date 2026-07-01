import type { Metadata } from "next";

import { proximaNova } from "./fonts";
import "./globals.scss";


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
