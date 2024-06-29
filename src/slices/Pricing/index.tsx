import { Content } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import Heading from "@/app/components/Heading";
import ButtonPrimary from "@/app/components/ButtonPrimary";
import Button from "@/app/components/Button";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading
      as="h2"
      size="2xl"
      className="text-center font-semibold text-black pt-9 pb-7"
    >
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading
      as="h3"
      size="md"
      className="text-center text-black font-semibold pl-5"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <Heading
      as="p"
      size="base"
      className="text-left text-black font-bold uppercase"
    >
      {children}
    </Heading>
  ),
};

const priceComponents: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Heading as="p" size="xl" className="text-left text-black font-bold pl-2">
      {children}
    </Heading>
  ),
};

const subdescriptionComponents: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Heading as="p" size="xs" className="text-left text-black font-normal">
      {children}
    </Heading>
  ),
};

const descriptionComponents: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Heading as="p" size="s" className="text-left text-black font-normal py-5">
      {children}
    </Heading>
  ),
};

const benefitComponents: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Heading as="p" size="xs" className="text-left text-black font-normal">
      {children}
    </Heading>
  ),
  list: ({ children }) => (
    <ul className="list-disc list-inside pb-5 [&:nth-child(1)&>li]:text-bluebackground [&:nth-child(1)&>li]:check-icon [&:nth-child(1)&>li]:list-marker">
      {children}
    </ul>
  ),
};

const extraComponents: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Heading
      as="p"
      size="xs"
      className="text-left text-bluebackground font-semibold"
    >
      {children}
    </Heading>
  ),
};

/**
 * Props for `Pricing`.
 */
export type PricingProps = SliceComponentProps<Content.PricingSlice>;

/**
 * Component for "Pricing" Slices.
 */
const Pricing = ({ slice }: PricingProps): JSX.Element => {
  return (
    <Bounded
      as="section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container overflow-hidden mx-auto max-w-screen-2xl flex-col align-center justify-center pb-10 lg:pb-5 pt-16 px-5 lg:px-8 2xl:px-20"
    >
      <div className="w-full lg:max-w-4xl mx-auto">
        <div className="flex flex-col justify-between text-center items-center">
          <p className="text-xxs text-white font-light font-lato uppercase bg-primary rounded-full py-1 px-4">
            {slice.primary.section_label}
          </p>
          <PrismicRichText
            field={slice.primary.section_headeline}
            components={components}
          />

          <div className="text-center grid grid-cols-1 lg:grid-cols-2 p-2 gap-2 lg:gap-9 w-full">
            <>
              {slice.primary.pricing_tables.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`flex flex-col justify-start text-left items-start flex-wrap mt-20 sm:min-h-[500px] lg:max-h-[900px] lg:max-w-[700px] w-full shadow-md col-span-1 border-0 rounded-[24px] p-7 gap-5 hover:mt-[1px] ease-in duration-300 ${item.highlight ? "bg-gradient-linear-light-blue" : "bg-white"}`}
                  >
                    {/* Start Header */}
                    <div className="flex flex-col justify-between text-left items-start w-full border-b border-b-grey-900">
                      <div className="flex flex-row justify-between w-full">
                        <PrismicRichText
                          field={item.plan}
                          components={components}
                        />

                        <div
                          className={`${item.highlight ? "bg-lightblue/20" : "bg-primary/10"} rounded-[24px] py-[1.5px] px-2`}
                        >
                          <>
                            {item.has_ribbon ? (
                              <p
                                className={`${item.highlight ? "text-bluebackground" : "text-primary"} font-lato text-xs font-semibold`}
                              >
                                {item.ribbon_label}
                              </p>
                            ) : null}
                          </>
                        </div>
                      </div>
                      <div className="flex flex-col justify-end text-left items-end w-fit">
                        <div className="flex flex-row justify-start items-start text-md pt-5 pb-1">
                          $
                          <PrismicRichText
                            field={item.price}
                            components={priceComponents}
                          />
                          <>
                            {item.custom_quote ? (
                              <span className="flex flex-row justify-start items-start font-lato text-sm font-normal text-black">
                                +
                              </span>
                            ) : null}
                          </>
                        </div>
                      </div>

                      {/* Start Benefit Description */}
                      <div className="flex flex-col justify-end text-left items-end w-fit">
                        <PrismicRichText
                          field={item.benefit_sub_description}
                          components={subdescriptionComponents}
                        />

                        <PrismicRichText
                          field={item.benefit_description}
                          components={descriptionComponents}
                        />
                      </div>
                      {/* End Benefit Description */}
                    </div>
                    {/* End Header */}

                    {/* Start Benefit List */}
                    <>
                      {item.show_primary_button ? (
                        <ButtonPrimary
                          field={item.cta_button_link}
                          className="w-full"
                        >
                          <span className="w-full">
                            {item.cta_button_label}
                          </span>
                        </ButtonPrimary>
                      ) : (
                        <Button field={item.cta_button_link} className="w-full">
                          <>{item.cta_button_label}</>
                        </Button>
                      )}
                    </>
                    <div className="flex flex-col justify-start text-left items-start w-full border-b border-b-grey-900">
                      <PrismicRichText
                        field={item.benefit_list}
                        components={benefitComponents}
                      />
                    </div>
                    {/* End Benefit List */}

                    {/* Start Extra */}
                    <div className="flex flex-row justify-between items-start w-full">
                      <div className="flex flex-row justify-between items-start gap-2 w-fit">
                        <div className="flex flex-row pt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="text-bluebackground h-5 w-5 flex-none"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <PrismicRichText
                          field={item.extra}
                          components={extraComponents}
                        />
                      </div>
                      <div
                        className={`${item.highlight ? "bg-lightblue/20" : "bg-primary/10"} rounded-[24px] py-[1.5px] px-2 flex justify-end items-end w-fit`}
                      >
                        <PrismicRichText
                          field={item.price_extra}
                          components={extraComponents}
                        />
                      </div>
                    </div>
                    {/* End Extra */}
                  </div>
                );
              })}
            </>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Pricing;
