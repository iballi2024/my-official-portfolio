import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./index.css";
import "./globals.scss";

import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['400', '700'] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Alli Ibrahim A. | Frontend Developer",
  description:
    "Frontend Developer specializing in React, Next.js, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         className={firaCode.className}
      >
        {children}
      </body>
    </html>
  );
}
