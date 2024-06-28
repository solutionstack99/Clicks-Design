import Bounded from "@/app/components/Bounded";
import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Heading from "@/app/components/Heading";
import ButtonPrimary from "@/app/components/ButtonPrimary";

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
  heading3: ({ children }) => (
    <Heading as="h3" size="md" className="text-center text-black font-semibold">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <Heading as="p" size="base" className="text-center text-black">
      {children}
    </Heading>
  ),
};

/**
 * Props for `SectionColumns`.
 */
export type SectionColumnsProps =
  SliceComponentProps<Content.SectionColumnsSlice>;

/**
 * Component for "SectionColumns" Slices.
 */
const SectionColumns = ({ slice }: SectionColumnsProps): JSX.Element => {
  return (
    <Bounded
      as="section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${slice.primary.top_padding ? "pt-16" : ""} px-5 lg:px-8 2xl:px-20`}
    >
      <div
        className={`bg-${slice.primary.background_color === "white" ? "black" : "grey-900/50"} ${slice.primary.border_radius === "top right top left" ? "rounded-tr-[45px] rounded-tl-[45px]" : "rounded-br-[45px] rounded-bl-[45px]"} container overflow-hidden mx-auto max-w-screen-2xl flex-col align-center justify-center py-10 lg:py-5 px-5 lg:px-8 2xl:px-20`}
      >
        <div className="flex flex-col justify-between text-center items-center">
          <PrismicRichText
            field={slice.primary.headeline}
            components={components}
          />
          <PrismicRichText
            field={slice.primary.sub_headeline}
            components={components}
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mt-8">
          <>
            {slice.primary.columns.map((item, index) => {
              return (
                <div
                  className="flex flex-col flex-start justify-start items-center gap-8 mt-8 sm:min-h-[200px] w-full lg:w-1/3"
                  key={index}
                >
                  {item.icons}
                  <PrismicRichText
                    field={item.column_headeline}
                    components={components}
                  />
                  <PrismicRichText
                    field={item.column_description}
                    components={components}
                  />
                </div>
              );
            })}
          </>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-8">
          {slice.primary.show_primary_button ? (
            <ButtonPrimary field={slice.primary.button_link}>
              <>{slice.primary.button_label}</>
            </ButtonPrimary>
          ) : null}
        </div>
      </div>
    </Bounded>
  );
};

export default SectionColumns;
