import { createClient } from "@/prismicio"; // Move this line up
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer"; // Change the import statement to use lowercase "footer"

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["300", "400", "700", "900"],
});

export async function generateMetadata(): Promise<Metadata> {
  const create = createClient();

  const settings = await create.getSingle("settings");
  return {
    title: settings.data.meta_title || "Weesp",
    description:
      settings.data.meta_description ||
      "Weesp is a web design and web development agency that helps founders drive sales.",
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
    <html lang="en">
      <body className={lato.variable}>
        <Header />

        <main className="container py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
