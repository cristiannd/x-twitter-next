import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import NavLinks from "./components/nav-links";

export const metadata: Metadata = {
  title: {
    template: "%s | X-Twitter",
    default: "X-Twitter",
  },
  description: "Generated by midudev's tutorial and upgraded by me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="mx-auto w-full max-w-[600px] dark">
      <body>
        <header>
          <NavLinks />
        </header>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
