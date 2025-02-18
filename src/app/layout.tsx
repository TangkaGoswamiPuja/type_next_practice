import type { Metadata } from "next";
import { Inter } from 'next/font/google'

import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Nexcent",
  description: "Practice Next.js and Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={inter.className}>
         <Navbar></Navbar> 
      <main className="min-h-screen 
       max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 "> {children}</main>
       <Footer></Footer>
      </body>
    </html>
  );
}
