import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";

import Logo from "@/app/components/Logo";
import Navbar from "./Navbar";
import Bounded from "./Bounded";
import Button from "./Button";

export default async function Header() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <Bounded
      as="header"
      className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-5 container"
    >
      <Logo />

      <Navbar />

      <Button
        field={settings.data.cta_button_link}
        className="relative block z-10"
      >
        <>{settings.data.cta_button_label}</>
      </Button>
    </Bounded>
  );
}
