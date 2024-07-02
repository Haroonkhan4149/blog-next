import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Recipces",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} bg-gray-100 h-full`}>
        <header className="bg-white shadow-md py-4">
          <nav className="container mx-auto p-4 flex justify-between">
            <Link href="/" className="italic text-4xl font-bold text-indigo-600 hover:text-indigo-900 transition duration-300 ease-in-out">
              My Kitchen
            </Link>
          </nav>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-gray-200 py-4">
          <p className="text-sm text-gray-600 text-center">Created by Haroon Khan</p>
        </footer>
      </body>
    </html>
  );
}