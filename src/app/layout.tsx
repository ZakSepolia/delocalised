"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./components/Header"));
const Footer = dynamic(() => import("./components/Footer"));
const inter = Inter({ subsets: ["latin"] });
import Providers from "./providers";
import FooterMobile from "./components/FooterMobile";
import { ManagedUIContext } from "context/ui.context";
import CartButton from "components/cart/cart-button";

// export const metadata: Metadata = {
//   title: "Benzene.win Deflationary Model",
//   description: "Benzene.win Deflationary Model",
//   icons: {
//     icon: "/favicon.svg",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ManagedUIContext>
        <body className={inter.className}>
          <Header />
          <CartButton />
          <main className=" overflow-hidden">
            <Providers>{children}</Providers>
          </main>
          <Footer />
          <FooterMobile />
        </body>
      </ManagedUIContext>
    </html>
  );
}
