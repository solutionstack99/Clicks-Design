import clsx from "clsx";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import Bounded from "./Bounded";

export default async function ButtonSecoundary({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return (
    <Bounded
      as="button"
      className={clsx(
        `relative button-Secoundary ease-out duration-30 overflow-hidden before:button-hover hover:before:translate-x-0 cursor-pointer py-2 px-10 font-lato text-white`,
        className
      )}
    >
      <PrismicNextLink className="relative block z-10" {...restProps} />
    </Bounded>
  );
}
