import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import ButtonSecoundary from "@/components/ButtonSecoundary";

/**
 * Props for `RecentWork`.
 */
export type RecentWorkProps = SliceComponentProps<Content.RecentWorkSlice>;

/**
 * Component for "RecentWork" Slices.
 */
const RecentWork = ({ slice }: RecentWorkProps): JSX.Element => {
  return (
    <Bounded
      as="section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative px-5 md:p-0"
    >
      <div className="background-image-radial-grey"></div>
      <div className="flex flex-col items-center lg:mt-[-50px]">
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row items-center gap-5 overflow-y-hidden h-auto md:max-h-[200vh] my-24 cursor-pointer">
            {slice.primary.works.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    index !== 1 ? "translate-y-20 md:translate-y-0" : undefined
                  }
                >
                  <PrismicNextLink field={item.link}>
                    <PrismicNextImage
                      field={item.image}
                      className="border-8 border-white rounded-t-[24px] shadow-lg w-full md:w-[470px] h-auto object-cover"
                    />
                  </PrismicNextLink>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-center lg:mt-[-50px]">
            {slice.primary.show_primary_button ? (
              <ButtonSecoundary field={slice.primary.button_link}>
                <>{slice.primary.button_label}</>
              </ButtonSecoundary>
            ) : null}
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default RecentWork;
