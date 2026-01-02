import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "AutoElite | Premium Car Service & Repair",
  description:
    "Professional auto repair services with modern technology and expert mechanics. Book your appointment today.",
  keywords:
    "car service, auto repair, mechanic, car maintenance, brake service, oil change",
  authors: [{ name: "AutoElite" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://autoelite.com",
    title: "AutoElite | Premium Car Service",
    description: "Professional auto repair services",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body className="bg-primary text-white font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
