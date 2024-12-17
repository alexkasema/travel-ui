import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import ResponsiveNavbar from "@/components/Home/Navbar/ResponsiveNavbar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travel UI",
  description: "A travel UI built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}antialiased`}>
        <ResponsiveNavbar />
        {children}
      </body>
    </html>
  );
}
