import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Montserrat } from "next/font/google";

export const metadata = {
  title: "My Portfolio",
  description: "My portfolio website built with Next.js and Tailwind CSS",
};

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={`${montserrat.className} bg-white dark:bg-gray-800 text-black dark:text-white`}
      >
        <Header />
        <main className="pt-16"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
