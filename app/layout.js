import "./globals.css";
import { Inter } from "next/font/google";
import Store from "./store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Test",
  description: "This is test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Store>
        <body className={inter.className}>{children}</body>
      </Store>
    </html>
  );
}
