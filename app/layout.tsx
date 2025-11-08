import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Strony Internetowe dla Lokalnych Biznesów | StronaDlaWas",
  description: "Nowoczesne strony internetowe skoncentrowane na konwersji dla małych firm. Specjalizujemy się w salonach fryzjerskich, restauracjach, warsztatach i lokalnych firmach usługowych.",
  keywords: ["tworzenie stron internetowych", "strony dla małych firm", "strony dla salonów fryzjerskich", "strony dla restauracji", "strony dla warsztatów"],
  authors: [{ name: "StronaDlaWas" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
