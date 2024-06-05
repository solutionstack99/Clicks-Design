import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "@/prismicio";
import Link from "next/link";

export default async function Logo() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <div className="flex flex-shrink-0">
      <Link href="/">
        <PrismicNextImage field={settings.data.logo} className="w-[150px]" />
      </Link>
    </div>
  );
}
