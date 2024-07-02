import { AccordionUI } from "@/app/components/Accordion";
import Bounded from "@/app/components/Bounded";
import { Content } from "@prismicio/client";
import Heading from "@/app/components/Heading";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading
      as="h2"
      size="2xl"
      className="text-center font-semibold text-black pt-2.5 pb-7"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <Heading as="p" size="base" className="text-center text-black-900">
      {children}
    </Heading>
  ),
};

/**
 * Props for `Faq`.
 */
export type FaqProps = SliceComponentProps<Content.FaqSlice>;

/**
 * Component for "Faq" Slices.
 */
const Faq = ({ slice }: FaqProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container px-5 lg:px-8 2xl:px-20"
    >
      <div className="flex flex-col justify-center items-center w-full mx-auto">
        <PrismicRichText
          field={slice.primary.headeline}
          components={components}
        />
      </div>

      <div className="w-full lg:max-w-4xl mx-auto">
        <div className="flex flex-col justify-between text-center items-center">
          <AccordionUI slice={slice} />
        </div>

        <div className="flex flex-col justify-center items-center mt-8">
          <PrismicRichText
            field={slice.primary.pitch}
            components={components}
          />
        </div>
      </div>
    </Bounded>
  );
};

export default Faq;
