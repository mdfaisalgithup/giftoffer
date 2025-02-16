import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header/page";
import Footer from "./footer/page";



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


      <body

        className="font-sans font-lato">
          <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
