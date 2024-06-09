import Bounded from "@/app/components/Bounded";
import Button from "@/app/components/Button";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

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
    >
      <div className="flex flex-col items-center lg:mt-[-50px]">
        <div className="relative">
          <div className="flex flex-col sm:flex-row items-center gap-5 overflow-y-hidden max-h-[200vh] my-24 cursor-pointer">
            {slice.primary.works.map((item, index) => {
              return (
                <div
                  key={index}
                  className={index !== 1 ? "translate-y-20" : undefined}
                >
                  <PrismicNextLink field={item.link}>
                    <PrismicNextImage field={item.image} />
                  </PrismicNextLink>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-center lg:mt-[-50px]">
            {slice.primary.show_primary_button ? (
              <Button field={slice.primary.button_link}>
                <>{slice.primary.button_label}</>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default RecentWork;
