
import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./component/footer/FooterComponent";
import Header from "./component/header/page";
import HeadLG from "./component/headlg/head";
import { CartProvider } from "./contexts/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Page",
};



export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    <html lang="en">
      <HeadLG/>
      <CartProvider>
      <body className={inter.className}>
          <Header />
          <main id="main">
              {children}
          </main>
          <Toaster />
          <Footer />
      </body>
      </CartProvider>
    </html>
  );
}
