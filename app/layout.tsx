import "./globals.css";
import { Navbar, Footer } from "@/components";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: 'Car Hub',
  description: 'Here are some great cars you can get.'
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <SessionProvider>
          <Navbar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
