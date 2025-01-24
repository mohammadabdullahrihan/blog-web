import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "./AuthProvider";
import Navbar from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Simple Blog App",
  description: "Welcome to Next JS Simple Blog App",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en" data-theme="light">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          <main className="container mx-auto">{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
}
