import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqSlice } from "../../../prismicio-types";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import Heading from "@/app/components/Heading";

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
    <Heading as="p" size="sm" className="text-left text-grey-300 font-semibold">
      {children}
    </Heading>
  ),
};

const AnswerComponents: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <Heading as="p" size="s" className="text-left text-black-400 font-normal">
      {children}
    </Heading>
  ),
};

type FaqsItemProps = {
  slice: FaqSlice;
};

export function AccordionUI({ slice }: FaqsItemProps) {
  return (
    <Accordion type="single" collapsible className="w-full text-left">
      {slice.primary.faq_items.map((item, index) => {
        return (
          <div key={index}>
            <AccordionItem
              value={`item-${index}`}
              className="bg-white border-[1px] border-grey-900 rounded-[24px] p-5 mb-5"
            >
              <AccordionTrigger>
                <PrismicRichText
                  field={item.question}
                  components={components}
                />
              </AccordionTrigger>
              <AccordionContent className="bg-grey-900/50 border-0 rounded-md p-5 mt-5">
                <PrismicRichText
                  field={item.answer}
                  components={AnswerComponents}
                />
              </AccordionContent>
            </AccordionItem>
          </div>
        );
      })}
    </Accordion>
  );
}
