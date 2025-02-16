import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header/page";
import Footer from "./footer/page";
import Head from "next/head";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gift-Offer Paypal Provider",
  description: "Paypal Gift Offer free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">   

<link rel="icon" href="https://i.ibb.co.com/9HSTVWfS/39219854-35e8-4bc4-a275-bef34da6ab88.jpg" sizes="any" />

      <body

        className="font-lato">
          <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
