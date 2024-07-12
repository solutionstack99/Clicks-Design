import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  size?:
    | "xs"
    | "base"
    | "s"
    | "sm"
    | "xs"
    | "xxs"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl";
  className?: string;
  children: React.ReactNode;
};

export default function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "3xl",
  ...restProps
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        size === "3xl" &&
          "text-2xl md:text-3xl font-manrope w-full leading-10 md:leading-none",
        size === "2xl" &&
          "text-xl md:text-2xl font-manrope w-full leading-snug",
        size === "xl" && "text-md md:text-xl font-manrope w-full leading-snug",
        size === "md" && "text-md md:text-md font-manrope w-full leading-7",
        size === "lg" &&
          "text-lg md:text-lg font-manrope w-full leading-9 md:leading-7",
        size === "sm" && "text-sm md:text-sm font-lato w-full",
        size === "base" && "text-base md:text-base font-lato w-fit",
        size === "s" && "text-s md:text-s font-lato w-full",
        size === "xs" &&
          "text-xs md:text-xs leading-6 md:leading-7 font-lato w-full",
        size === "xxs" && "text-xxs md:text-xxs font-lato font-thin w-full",
        className
      )}
    >
      {children}
    </Comp>
  );
}
