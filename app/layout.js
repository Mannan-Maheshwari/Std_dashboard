import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "LearnSpace — Student Dashboard",
  description: "A student learning dashboard built with Next.js, Tailwind CSS, Framer Motion and Supabase.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        {children}
      </body>
    </html>
  );
}