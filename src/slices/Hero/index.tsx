import { PrismicNextImage } from "@prismicio/next";
import Script from "next/script";

import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Heading from "@/components/Heading";
import Typing from "@/components/Typing";
import ButtonSecoundary from "@/components/ButtonSecoundary";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading
      as="h1"
      size="3xl"
      className="relative text-center text-black pt-2.5 pb-5 z-10"
    >
      {children}
    </Heading>
  ),
  heading6: ({ children }) => (
    <Heading
      as="h6"
      size="xs"
      className="text-center text-black uppercase z-10"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="relative text-sm leading-6 md:leading-7 w-full font-lato font-base text-black1 text-center max-w-md z-10">
      {children}
    </p>
  ),
};

const stars = {
  One: <One />,
  Two: <Two />,
  Three: <Three />,
  Four: <Four />,
  Five: <Five />,
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full overflow-hidden mx-auto max-w-screen-2xl flex flex-col align-center justify-center items-center py-10 lg:py-5 px-5 lg:px-8 2xl:px-20 z-10 container"
    >
      <>
        <div className="relative flex flex-row items-center justify-center gap-2 z-10">
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
          {/* <ul className="flex flex-row items-center justify-center">
            {slice.primary.client_images.map((item, index) => {
              return (
                <li key={index} className="ml-[-16px]">
                  <PrismicNextImage
                    field={item.client_image}
                    className="rounded-full w-12 h-12"
                  />
                </li>
              );
            })}
          </ul>
          <div>
            {slice.primary.stars.map((item, index) => {
              return (
                <div key={index}>{item.star && <>{stars[item.star]}</>}</div>
              );
            })}
            <p className="font-lato text-secondary font-normal text-sm">
              loved by founders
            </p>
          </div> */}
        </div>

        <div className="md:flex md:flex-col items-center text-center justify-center md:space-x-0 w-full md:max-w-[540px] xs:max-w-[340px]">
          <div className="background-image-radial-container">
            <div className="background-graphic"></div>
          </div>

          <div className="background-image-radial"></div>

          <PrismicRichText
            field={slice.primary.headeline}
            components={components}
          />
          <Typing />
        </div>

        <div className="md:flex md:flex-col items-center text-center justify-center md:space-x-0 w-full md:max-w-[640px] xs:max-w-[340px]">
          <PrismicRichText
            field={slice.primary.sub_headeline}
            components={components}
          />
        </div>

        <div className="md:flex md:flex-col items-center text-center justify-center md:space-x-0 w-full md:max-w-[540px] xs:max-w-[340px] mt-6 ">
          <ButtonSecoundary field={slice.primary.button_link} className="z-10">
            <>{slice.primary.button_label}</>
          </ButtonSecoundary>
          <p className="relative text-grey text-xs font-light font-lato italic mt-2 z-10">
            <>{slice.primary.button_sub_text}</>
          </p>
        </div>

        {/* <PrismicNextImage
          field={slice.primary.background_image}
          className="absolute right-[50%] top-[50%] translate-x-[50%] translate-y-[-50%] w-[410px] h-[202px] object-cover object-center z-[-1]"
        /> */}
      </>
    </Bounded>
  );
};

export default Hero;

function One() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="none">
      <path
        fill="#FF611A"
        d="M8 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0z"
      ></path>
    </svg>
  );
}

function Two() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="16" fill="none">
      <path
        fill="#FF611A"
        d="M8 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0zm18 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L26 11.056l-4.702 3.416 1.796-5.528-4.703-3.416h5.813L26 0z"
      ></path>
    </svg>
  );
}

function Three() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="16" fill="none">
      <path
        fill="#FF611A"
        d="M8 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0zm36 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L44 11.056l-4.702 3.416 1.796-5.528-4.703-3.416h5.813L44 0zM26 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L26 11.056l-4.702 3.416 1.796-5.528-4.703-3.416h5.813L26 0z"
      ></path>
    </svg>
  );
}

function Four() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="16" fill="none">
      <path
        fill="#FF611A"
        d="M8 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0zm54 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L62 11.056l-4.702 3.416 1.796-5.528-4.703-3.416h5.813L62 0zM44 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L44 11.056l-4.702 3.416 1.796-5.528-4.703-3.416h5.813L44 0zM26 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L26 11.056l-4.702 3.416 1.796-5.528-4.703-3.416h5.813L26 0z"
      ></path>
    </svg>
  );
}

function Five() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="16" fill="none">
      <path
        fill="#FF611A"
        d="M8 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L8 11.056l-4.702 3.416 1.796-5.528L.392 5.528h5.812L8 0zm72 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L80 11.056l-4.702 3.416 1.796-5.528-4.703-3.416h5.813L80 0zM62 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L62 11.056l-4.702 3.416 1.796-5.528-4.703-3.416h5.813L62 0zM44 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L44 11.056l-4.702 3.416 1.796-5.528-4.703-3.416h5.813L44 0zM26 0l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L26 11.056l-4.702 3.416 1.796-5.528-4.703-3.416h5.813L26 0z"
      ></path>
    </svg>
  );
}
