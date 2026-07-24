import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Lato, Roboto_Slab, Amaranth } from "next/font/google";
import WhatsAppButton from "./components/WhatsAppButton";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto-slab",
  display: "swap",
});

const amaranth = Amaranth({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-amaranth",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Fun Fine - Best Chips & Namkeen Brand in India",
  },
  description:
    "Fun Fine is the Best Chips Brand in India & Best Namkeen Brand in India, offering crispy, tasty snacks made with quality ingredients for every craving.",
  keywords: [
    "Fun Fine",
    "best chips brand in India",
    "best namkeen brand in India",
    "namkeen manufacturer Sonipat",
    "chips and namkeen franchise",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${robotoSlab.variable} ${amaranth.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <WhatsAppButton/>
        <Footer />
      </body>
    </html>
  );
}