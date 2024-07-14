import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";
import ButtonPrimary from "@/components/ButtonPrimary";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading
      as="h2"
      size="2xl"
      className="text-center font-semibold text-white pt-2.5 pb-7 md:max-w-[800px]"
    >
      {children}
    </Heading>
  ),
};
/**
 * Props for `CtaRow`.
 */
export type CtaRowProps = SliceComponentProps<Content.CtaRowSlice>;

/**
 * Component for "CtaRow" Slices.
 */
const CtaRow = ({ slice }: CtaRowProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="overflow-hidden flex-col align-center justify-center py-10 md:py-36 px-5 lg:px-8 2xl:px-20 bg-black"
    >
      <div className="container mx-auto max-w-screen-2xl flex flex-col justify-center items-center w-full border-[1px] border-grey-200 rounded-[45px] p-10">
        <div
          className="senja-embed"
          data-id="7dd2c08d-64d9-43b8-8cc3-5b19e2252648"
          data-mode="shadow"
          data-lazyload="false"
        ></div>
        <script
          async
          type="text/javascript"
          src="https://widget.senja.io/widget/7dd2c08d-64d9-43b8-8cc3-5b19e2252648/platform.js"
        ></script>
        <PrismicRichText
          field={slice.primary.headeline}
          components={components}
        />
        <ButtonPrimary
          field={slice.primary.button_link}
          className="rounded-[16px]"
        >
          <p className="font-lato text-white text-md">
            {slice.primary.button_label}
          </p>
        </ButtonPrimary>
      </div>
    </Bounded>
  );
};

export default CtaRow;
