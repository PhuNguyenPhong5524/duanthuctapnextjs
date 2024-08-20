import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./component/footer/FooterComponent";
import Header from "./component/header/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Page",
};



export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className={inter.className}>
       <Header />
           {children}
      <Footer />
      </body>
    </html>
  );
}
