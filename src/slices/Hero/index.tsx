import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import Bounded from "@/app/components/Bounded/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

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
  console.log(slice.primary.stars);
  return (
    <Bounded
      className="flex flex-col items-center justify-center w-full h-screen bg-white"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <>
        <div className="flex flex-row items-center justify-center gap-2">
          <ul className="flex flex-row items-center justify-center">
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
          </div>
        </div>
        <PrismicRichText field={slice.primary.headeline} />
        <PrismicNextImage field={slice.primary.background_image} />
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
