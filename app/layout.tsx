import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abstruck",
  description: "Official website of Abstruck",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.className} text-neutral-900 dark:text-neutral-50 bg-neutral-50 dark:bg-neutral-900`}>
        <nav>
          <div className="flex justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <div className="flex space-x-4 items-center">
              <a href="/" className="font-bold text-2xl">Abstruck</a>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/members">Members</a>
            </div>
            <div className="flex space-x-4 items-center">
              <a href="/login">Login</a>
              <a href="/register">Register</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
