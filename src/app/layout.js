import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luxury Living",
  description: "Welcome to Luxury Living",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body > <AuthProvider>{children} </AuthProvider></body>
    </html>
  );
}
