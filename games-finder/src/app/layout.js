
import "./globals.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";


export const metadata = {
  title: "Mash-Up",
  description: "Find your videogame",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='{inter.className} bg-[#1c1c1c] font-poppins'>
        <Header/>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
