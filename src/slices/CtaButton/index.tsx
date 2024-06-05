import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `CtaButton`.
 */
export type CtaButtonProps = SliceComponentProps<Content.CtaButtonSlice>;

/**
 * Component for "CtaButton" Slices.
 */

const CtaButton = ({ slice }: CtaButtonProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="bg-primary rounded-full py-5 px-10">
        <PrismicNextLink field={slice.primary.cta_button_link}>
          {slice.primary.cta_button_label}
          <>
            {slice.primary.has_calls_booked_text
              ? slice.primary.calls_booked
              : null}
          </>
        </PrismicNextLink>
      </div>
    </section>
  );
};

export default CtaButton;
