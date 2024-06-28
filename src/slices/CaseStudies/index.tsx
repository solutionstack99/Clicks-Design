import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Heading from "@/app/components/Heading";
import Bounded from "@/app/components/Bounded";
import ButtonPrimary from "@/app/components/ButtonPrimary";
import { PrismicNextImage } from "@prismicio/next";

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
};

/**
 * Props for `CaseStudies`.
 */
export type CaseStudiesProps = SliceComponentProps<Content.CaseStudiesSlice>;

/**
 * Component for "CaseStudies" Slices.
 */
const CaseStudies = ({ slice }: CaseStudiesProps): JSX.Element => {
  return (
    <Bounded
      as="section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container overflow-hidden mx-auto max-w-screen-2xl flex-col align-center justify-center pb-10 lg:pb-5 pt-16 px-5 lg:px-8 2xl:px-20"
    >
      <div className="w-full lg:max-w-4xl mx-auto">
        <PrismicRichText
          field={slice.primary.headeline}
          components={components}
        />
      </div>

      <>
        {slice.primary.images.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center gap-5">
              <PrismicNextImage field={item.image} />
            </div>
          );
        })}
        <div className="flex flex-col justify-center items-center mt-8">
          {slice.primary.show_primary_button ? (
            <ButtonPrimary field={slice.primary.button_link}>
              <>{slice.primary.button_label}</>
            </ButtonPrimary>
          ) : null}
          <p className="text-grey-500 text-xs font-light font-lato lg:text-sm mt-2">
            <>{slice.primary.button_sub_text}</>
          </p>
        </div>
      </>
    </Bounded>
  );
};

export default CaseStudies;
