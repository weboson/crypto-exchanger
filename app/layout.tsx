import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import  'bootstrap/dist/css/bootstrap.min.css'
import  "./assets/img/apple-icon.png"
import  "./assets/css/nucleo-icons.css"
import  "./assets/css/nucleo-svg.css"
import  "./assets/css/nucleo-svg.css"
import "./assets/css/soft-ui-dashboard.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "willowsunion",
  description: "Buying Bitcoin at a bargain price, or selling cryptocurrency is quite simple on the online cryptocurrency exchange Willowsunion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
