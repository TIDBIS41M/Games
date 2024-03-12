import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mash-Up",
  description: "Find your videogame",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      </body>
    </html>
  );
}
