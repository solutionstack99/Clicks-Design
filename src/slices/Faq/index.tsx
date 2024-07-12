import { AccordionUI } from "@/components/Accordion";
import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import Heading from "@/components/Heading";
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
      className="text-center font-semibold text-black py-7"
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
      className="bg-grey-900/20 mx-5 px-5 lg:px-8 2xl:px-20 py-32 rounded-[45px]"
    >
      <div
        id="faq"
        className="container w-full mx-auto flex flex-col justify-center items-center"
      >
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
