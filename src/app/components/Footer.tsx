import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";
import Link from "next/link";
import Logo from "./Logo";
import Bounded from "./Bounded/Bounded";
import Social from "./SocialIcons/SocialIcons";
import SocialIcons from "./SocialIcons/SocialIcons";

export default async function Footer() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <Bounded as="footer" className="w-full container">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 border-t border-black">
        <div className="flex flex-col items-center sm:justify-between sm:items-start flex-wrap gap-9 pt-6">
          <Logo />
          <p>&#169; Weesp {new Date().getFullYear()}. All rights reserved.</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 ">
          <SocialIcons />
        </div>
      </div>
    </Bounded>
  );
}
