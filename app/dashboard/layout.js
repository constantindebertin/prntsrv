import { Inter } from "next/font/google";
import '@/app/globals.css'
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "prntsrv",
  description: "Print fast online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      {children}</body>
    </html>
  );
}
