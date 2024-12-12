import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {sansita , lato} from "@/utils/font";
import { cn } from "@/lib/utils";


// import { Sansita } from 'next/font/google';
// const sansita = Sansita({
//  subsets: ['latin'],
// weight: ['400', '700'], 
// variable: '--font-sansita', 
//  });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-lato antialiased",
          sansita , lato
       )}
      >
        {children}
      </body>
    </html>
  );
}
