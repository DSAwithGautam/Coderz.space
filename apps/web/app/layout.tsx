import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Algo Buddy",
  description:
    "A collaborative platform where developers master DSA and tech stacks through peer learning, problem-solving, and real progress tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-gray-100">
        <Script id="theme-bootstrap" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('coderz_theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`}
        </Script>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
