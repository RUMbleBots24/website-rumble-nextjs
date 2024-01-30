import "./globals.css";
import type { Metadata } from "next";
import Footer from "../components/Footer";
import Navigation from "@/components/Navigation";
import {Providers} from "./providers";
import "@fortawesome/fontawesome-svg-core/styles.css";
import * as React from "react";

export const metadata: Metadata = {
  title: "RUMblebots",
  description: "Learn about what we do here at RUMblebots!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className='light'>
      <body className="bg-background-100">
      <Providers>
          <Navigation/>
          {children}
          <Footer/>
      </Providers>
      </body>
      </html>
  );
}
