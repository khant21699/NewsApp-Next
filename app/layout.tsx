import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Provider from "./components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Live News",
  description: "Daily Updated News for you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          "bg-gray-100 dark:bg-zinc-900 transition-all duration-700"
        }
      >
        <Provider>
          <Header />
          <div className=" max-w-6xl mx-auto">{children}</div>
        </Provider>
      </body>
    </html>
  );
}

// dark:bg-zinc-900 body
