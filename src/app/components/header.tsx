import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";

import Logo from "@/app/components/Logo";
import Navbar from "./Navbar";
import Bounded from "./Bounded/Bounded";

export default async function Header() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <Bounded
      as="header"
      className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-5 container"
    >
      <Logo />

      <Navbar />

      <button className="relative bg-gradient-linear ease-out duration-30 overflow-hidden before:button-hover hover:before:translate-x-0 cursor-pointer rounded-lg py-2 px-10 shadow-1xl font-lato text-white">
        <PrismicNextLink
          field={settings.data.cta_button_link}
          className="relative block z-10"
        >
          <>{settings.data.cta_button_label}</>
        </PrismicNextLink>
      </button>
    </Bounded>
  );
}
