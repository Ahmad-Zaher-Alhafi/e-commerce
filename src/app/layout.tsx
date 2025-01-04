// app/layout.tsx or pages/_app.tsx
import localFont from "next/font/local";
import type { Metadata } from "next"; // Correct import for custom fonts
import "./globals.css";
import SignUpHeader from "@/app/components/SignUpHeader";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${integral.variable}`}>
        <SignUpHeader></SignUpHeader>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
