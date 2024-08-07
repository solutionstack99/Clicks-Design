import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import ButtonSecoundary from "@/components/ButtonSecoundary";

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
        <div className="flex flex-col lg:flex-row items-center gap-5">
          {slice.primary.images.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-row items-center gap-5 border-8 border-white rounded-t-[24px] shadow-lg"
              >
                <PrismicNextImage
                  field={item.image}
                  className="w-full md:max-w-2xl"
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-center items-center my-16">
          {slice.primary.show_primary_button ? (
            <ButtonSecoundary field={slice.primary.button_link}>
              <>{slice.primary.button_label}</>
            </ButtonSecoundary>
          ) : null}
          <p className="text-grey text-xs font-light font-lato italic mt-2">
            <>
              {slice.primary.button_sub_text}{" "}
              {new Date().toLocaleString("default", { month: "long" })}.
            </>
          </p>
        </div>
      </>
    </Bounded>
  );
};

export default CaseStudies;
