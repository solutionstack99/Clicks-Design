import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "@/prismicio";
import Link from "next/link";

export default async function WhiteLogo() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <div className="flex flex-shrink-0">
      <Link
        href="/"
        className="flex flex-row justify-center items-center gap-5"
      >
        <PrismicNextImage
          field={settings.data.light_logo}
          className="w-[45px]"
        />
        <p className="font-manrope text-white text-sm font-semibold hidden sm:block ">
          Clicks Design
        </p>
      </Link>
    </div>
  );
}
