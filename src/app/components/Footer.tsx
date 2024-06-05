import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";
import Link from "next/link";
import Logo from "./Logo";

export default async function Footer() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <footer>
      <Logo />
      <p>&#169; Weesp {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  );
}
