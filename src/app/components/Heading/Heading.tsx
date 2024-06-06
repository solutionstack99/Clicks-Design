import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "base" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
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
        "font-lato text-balance",
        size === "3xl" &&
          "text-2xl md:text-3xl w-full leading-10 md:leading-none",
        size === "2xl" && "text-xl md:text-2xl w-full",
        size === "xl" && "text-md md:text-xl w-full",
        size === "md" && "text-md md:text-md w-full leading-7",
        size === "lg" && "text-md md:text-lg w-full leading-9 md:leading-7",
        size === "sm" && "text-sm md:text-sm w-full",
        size === "base" && "text-base md:text-base w-full",
        size === "xs" && "text-xs md:text-xs w-full",
        className
      )}
    >
      {children}
    </Comp>
  );
}
