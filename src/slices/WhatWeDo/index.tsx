import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `WhatWeDo`.
 */
export type WhatWeDoProps = SliceComponentProps<Content.WhatWeDoSlice>;

/**
 * Component for "WhatWeDo" Slices.
 */
const WhatWeDo = ({ slice }: WhatWeDoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for what_we_do (variation: {slice.variation}) Slices
    </section>
  );
};

export default WhatWeDo;
