import clsx from "clsx";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import Bounded from "./Bounded/Bounded";

export default async function Button({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return (
    <Bounded
      as="button"
      className={clsx(
        `relative bg-gradient-linear ease-out duration-30 overflow-hidden before:button-hover hover:before:translate-x-0 cursor-pointer rounded-lg py-2 px-10 shadow-1xl font-lato text-white`,
        className
      )}
    >
      <PrismicNextLink className="relative block z-10" {...restProps} />
    </Bounded>
  );
}
