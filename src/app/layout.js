import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const font = localFont({
  src: [
    {
      path: "../../public/font/GeneralSans-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/font/GeneralSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/font/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <section className="container mx-auto px-4 md:px-0">
          <Navbar />
          {children}
        </section>
      </body>
    </html>
  );
}
