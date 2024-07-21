import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import clsx from "clsx";
import { createClient } from "@/prismicio"; // Move this line up
import type { Metadata } from "next";
import { Manrope, Lato } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/providers";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["300", "400", "700", "900"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "700", "800"],
});

export async function generateMetadata(): Promise<Metadata> {
  const create = createClient();

  const settings = await create.getSingle("settings");
  return {
    title: settings.data.meta_title || "Click Design Agency",
    description:
      settings.data.meta_description ||
      "The # 1 design & development agency for early-staged startups, entrepreneurs, and creators. High-quality landing pages and websites. Reliable, world-class quality for one predictable fee. From pixel to perfection.",
    openGraph: {
      images: [settings.data.meta_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(lato.variable, manrope.variable)}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <Header />

          <main className="pt-10">{children}</main>
          <Footer />
          <GoogleAnalytics gaId="G-QNV65V4HHY" />
        </Providers>
      </body>
    </html>
  );
}
