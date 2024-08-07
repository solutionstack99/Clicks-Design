import clsx from "clsx";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import Bounded from "./Bounded";

export default async function ButtonPrimary({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return (
    <Bounded
      as="button"
      className={clsx(
        `relative bg-gradient-linear ease-out duration-30 overflow-hidden before:button-primary-hover hover:before:translate-x-0 cursor-pointer px-10 p-4 lg:px-[30px] rounded-2xl shadow-1xl font-lato text-white`,
        className
      )}
    >
      <PrismicNextLink className="relative block z-10" {...restProps} />
    </Bounded>
  );
}
