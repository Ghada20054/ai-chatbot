// app/layout.js
import "./globals.css"; // Ensure your tailwind styles are imported

export const metadata = {
  title: "Minimalist AI Chat",
  description: "A clean AI interface",
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* This children prop is where your page.js content goes */}
        {children}
      </body>
    </html>
  );
}