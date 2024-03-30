import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import NavBar from "@/components/Layout/NavBar";
import Footer from "@/components/Layout/Footer";
import SideBar from "@/components/Layout/SideBar";

const inter = Inter({ subsets: ["latin"] });

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    default: `${process.env.NEXT_PUBLIC_SITE_NAME}`,
  },
  description:
    "Explore a seamless user experience with our NextUI-powered site, offering pre-configured Pages. Streamline your journey with intuitive navigation and customizable options. Elevate your online presence effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {/* <div className="flex flex-row gap-2 h-dvh max-h-screen mb-6 lg:mb-0"> */}
          <div className="grid grid-cols-12 gap-4">
            <div className="sticky left-0 hidden lg:flex lg:flex-col w-full col-span-2 border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
              <SideBar />
            </div>
            <main className="flex min-h-screen col-span-12 lg:col-span-10 flex-col items-center justify-center p-4">
              {children}
            </main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
