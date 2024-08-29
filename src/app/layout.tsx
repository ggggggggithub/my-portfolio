import "./globals.css";
import Header from "../app/Components/Header";
import Footer from "./Components/Footer";

export const metadata = {
  title: "My Portfolio",
  description: "My portfolio website built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-800 text-black dark:text-white">
        <Header />
        <main className="pt-16"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
