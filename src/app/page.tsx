import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title || "Click Design Agency",
    description:
      page.data.meta_description ||
      "The # 1 design & development agency for early-staged startups, entrepreneurs, and creators. High-quality landing pages and websites. Reliable, world-class quality for one predictable fee. From pixel to perfection.",
  };
}
