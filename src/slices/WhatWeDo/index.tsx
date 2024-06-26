import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";
import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import Heading from "@/app/components/Heading";
import Button from "@/app/components/Button";
import { ServicesDocumentData } from "../../../prismicio-types";
import { PrismicNextImage } from "@prismicio/next";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading
      as="h2"
      size="2xl"
      className="text-center font-bold text-black pt-2.5 pb-7"
    >
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading
      as="h3"
      size="md"
      className="text-center text-black font-bold pl-5"
    >
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
 * Props for `WhatWeDo`.
 */
export type WhatWeDoProps = SliceComponentProps<Content.WhatWeDoSlice>;

/**
 * Component for "WhatWeDo" Slices.
 */
const WhatWeDo = async ({ slice }: WhatWeDoProps): Promise<JSX.Element> => {
  const client = createClient();
  console.log(slice);

  const services = await Promise.all(
    slice.primary.services.map((item) => {
      if (isFilled.contentRelationship(item.services) && item.services.uid) {
        return client.getByUID("services", item.services.uid);
      }
    })
  );

  const serviceData = services.map(
    (item) => item?.data
  ) as ServicesDocumentData[];

  return (
    <Bounded
      as="section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pb-10 lg:pb-5 pt-16 px-5 lg:px-8 2xl:px-20"
    >
      <div className="container mx-auto max-w-screen-2xl">
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

        <div className="pt-16 flex flex-col justify-between text-center items-center">
          <div className="flex flex-row justify-between text-center items-center">
            <ul className="flex flex-col lg:flex-row justify-between items-center gap-8 mt-8">
              {serviceData.map((item, index) => {
                const headeline = item.headeline as any;
                return (
                  <div
                    key={index}
                    className="relative flex flex-col items-center w-full lg:w-2/4"
                  >
                    <li className="flex flex-row item-center items-center before:flex before:flex-row before:items-center before:item-center before:w-5 before:h-[1.2rem] before:rounded-full before:bg-primary">
                      <PrismicRichText
                        field={headeline}
                        components={components}
                      />
                    </li>

                    <ul className="flex flex-row gap-5 mt-8">
                      {item.logo.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="flex flex-col items-center"
                          >
                            <PrismicNextImage
                              field={item.logo}
                              className="w-40 h-4"
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-8">
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

export default WhatWeDo;
