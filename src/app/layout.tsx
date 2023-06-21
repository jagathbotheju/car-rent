import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ToastProvider from "./components/ToastProvider";
import "./globals.css";
import { Figtree } from "next/font/google";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Car ShowCase",
  description: "rent a car",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-scree flex flex-col">
        <ToastProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
