import "./globals.css";
import { ThemeProvider } from "../app/Components/ThemeProvider";

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
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
