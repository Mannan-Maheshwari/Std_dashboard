import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "LearnSpace — Student Dashboard",
  description: "A futuristic student learning dashboard built with Next.js, Tailwind CSS, Framer Motion and Supabase.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-zinc-950`}>
        {children}
      </body>
    </html>
  );
}