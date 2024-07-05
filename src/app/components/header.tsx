import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";

import Logo from "@/app/components/Logo";
import Navbar from "./Navbar";
import Bounded from "./Bounded";
import ButtonPrimary from "@/app/components/ButtonPrimary";

export default async function Header() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <Bounded
      as="header"
      className="w-full flex flex-row justify-between sm:items-center flex-wrap gap-4 py-5 container"
    >
      <Logo />

      <Navbar />

      <ButtonPrimary
        field={settings.data.cta_button_link}
        className="relative block z-10"
      >
        <>{settings.data.cta_button_label}</>
      </ButtonPrimary>
    </Bounded>
  );
}
