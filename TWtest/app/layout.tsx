import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TWtest - Next.js avec Tailwind",
  description: "Projet Next.js avec Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

