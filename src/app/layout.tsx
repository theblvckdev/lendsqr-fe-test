import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { SidebarProvider } from "@/contexts/sidebar_context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lendsqr Test",
  description: "Lendsqr Frontend Engineer Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <html lang="en">
        <head>
          <link
            rel="shortcut icon"
            href="/images/favicon.png"
            type="image/x-icon"
          />
        </head>
        <body className={`${inter.className} bg-gray-50`}>{children}</body>
      </html>
    </SidebarProvider>
  );
}
