// app/layout.tsx or pages/_app.tsx
import localFont from "next/font/local";
import type { Metadata } from "next"; // Correct import for custom fonts
import "./globals.css";
import SignUpHeader from "@/app/components/SignUpHeader";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { checkIfLoggedIn } from "./actions/auth";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Medium.woff2", // Path to your regular font file
      weight: "500", // Regular weight
      style: "medium", // Medium style
    },
    {
      path: "./fonts/Satoshi-Regular.woff2", // Path to your regular font file
      weight: "400", // Regular weight
      style: "normal", // Normal style
    },
  ],
  variable: "--font-satoshi", // CSS variable for later use
});

const integral = localFont({
  src: [
    {
      path: "./fonts/Fontspring-DEMO-integralcf-bold.otf", // Path to your regular font file
      weight: "700", // Regular weight
      style: "bold", // Medium style
    },
    {
      path: "./fonts/Fontspring-DEMO-integralcf-medium.otf", // Path to your regular font file
      weight: "500", // Regular weight
      style: "medium", // Medium style
    },
    {
      path: "./fonts/Fontspring-DEMO-integralcf-regular.otf", // Path to your regular font file
      weight: "400", // Regular weight
      style: "normal", // Medium style
    },
  ],
  variable: "--font-integral", // CSS variable for later use
});

export const metadata: Metadata = {
  title: "Shop.co",
  description: "Shop your clothes with us.",
  openGraph: {
    title: "Shop.co",
    description: "Shop your clothes with us.",
    url: "https://shopco-mu.vercel.app/",
    siteName: "Shop.co",
    images: [
      {
        url: "/assets/images/screenshot.png",
        width: 1801,
        height: 1287,
        alt: "project image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoggedIn = await checkIfLoggedIn();

  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${integral.variable} flex flex-col h-screen`}
      >
        <SignUpHeader isHidden={isLoggedIn}></SignUpHeader>
        <Header isLoggedIn={isLoggedIn}></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
