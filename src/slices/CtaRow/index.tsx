import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Heading from "@/app/components/Heading";
import Bounded from "@/app/components/Bounded";
import ButtonPrimary from "@/app/components/ButtonPrimary";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading
      as="h2"
      size="2xl"
      className="text-center font-semibold text-black pt-2.5 pb-7 md:max-w-[800px]"
    >
      {children}
    </Heading>
  ),
};
/**
 * Props for `CtaRow`.
 */
export type CtaRowProps = SliceComponentProps<Content.CtaRowSlice>;

/**
 * Component for "CtaRow" Slices.
 */
const CtaRow = ({ slice }: CtaRowProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container overflow-hidden mx-auto max-w-screen-2xl flex-col align-center justify-center pb-10 md:pb-36 pt-10 md:pt-56 px-5 lg:px-8 2xl:px-20"
    >
      <div className="flex flex-col justify-center items-center w-full mx-auto">
        <PrismicRichText
          field={slice.primary.headeline}
          components={components}
        />
        <ButtonPrimary
          field={slice.primary.button_link}
          className="w-full md:max-w-[1200px]"
        >
          <p className="font-lato text-white text-md sm:text-2xl">
            {slice.primary.button_label}
          </p>
        </ButtonPrimary>
      </div>
    </Bounded>
  );
};

export default CtaRow;
