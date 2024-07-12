import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";

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
 * Props for `Testimonial`.
 */
export type TestimonialProps = SliceComponentProps<Content.TestimonialSlice>;

/**
 * Component for "Testimonial" Slices.
 */
const Testimonial = ({ slice }: TestimonialProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container overflow-hidden mx-auto max-w-screen-2xl flex-col align-center justify-center pb-20 lg:pb-36 pt-20 md:pt-32 px-5 lg:px-8 2xl:px-20"
    >
      <div className="w-full mx-auto">
        <PrismicRichText
          field={slice.primary.section_headeline}
          components={components}
        />
        <div
          className="senja-embed block pt-20"
          data-id="55e7182e-305a-4863-903b-e7f217bc873a"
          data-mode="shadow"
          data-lazyload="false"
        ></div>
        <script
          async
          type="text/javascript"
          src="https://widget.senja.io/widget/55e7182e-305a-4863-903b-e7f217bc873a/platform.js"
        ></script>
      </div>
    </Bounded>
  );
};

export default Testimonial;
