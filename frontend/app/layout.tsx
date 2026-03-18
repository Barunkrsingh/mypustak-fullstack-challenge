import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Post Manager",
  description: "MyPustak Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}