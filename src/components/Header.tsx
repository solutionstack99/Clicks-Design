import { createClient } from "@/prismicio";

import Logo from "@/components/Logo";
import Navbar from "./Navbar/Navbar";
import Bounded from "./Bounded";
import ShimmerButton from "@/components/ui/shimmer-button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

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

      <div className="z-1 flex items-center justify-center">
        <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-lato leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-sm">
            <>{settings.data.cta_button_label}</>
          </span>
          <ArrowRightIcon className="ml-1 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </ShimmerButton>
      </div>
    </Bounded>
  );
}
