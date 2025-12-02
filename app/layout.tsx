import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Analytical Dashboard",
  description: "Personal analytics dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {/* This renders the current page */}
        {children}
      </body>
    </html>
  );
}
