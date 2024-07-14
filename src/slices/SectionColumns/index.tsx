import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Heading from "@/components/Heading";
import ButtonSecoundary from "@/components/ButtonSecoundary";

const icons = {
  design_disconnect: <DesignDisconnect />,
  browse_zone: <BrowseZone />,
  website_build_trap: <WebsiteBuildTrap />,
  conversion_focused_design: <ConversionFocusedDesign />,
  high_end_branding: <HighEndBranding />,
  grow_your_reach: <GrowYourReach />,
};

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
  heading3: ({ children }) => (
    <Heading as="h3" size="md" className="text-center text-black font-semibold">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <Heading as="p" size="s" className="text-center text-black-900">
      {children}
    </Heading>
  ),
};

/**
 * Props for `SectionColumns`.
 */
export type SectionColumnsProps =
  SliceComponentProps<Content.SectionColumnsSlice>;

/**
 * Component for "SectionColumns" Slices.
 */
const SectionColumns = ({ slice }: SectionColumnsProps): JSX.Element => {
  return (
    <Bounded
      as="section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`bg-${slice.primary.section_background_color === "light-grey-linear" ? "grey-900/20" : "transparent"} ${slice.primary.top_padding ? "pt-16" : ""} ${slice.primary.border_radius === "top right top left" ? "rounded-tr-[45px] rounded-tl-[45px]" : "rounded-br-[45px] rounded-bl-[45px]"} bg-grey-900/20 mx-5 px-5 lg:px-8 2xl:px-20`}
    >
      <div
        className={`bg-${slice.primary.background_color === "white" ? "grey-900/20" : "transparent"} container overflow-hidden mx-auto max-w-screen-2xl flex-col align-center justify-center py-10 lg:py-5 px-5 lg:px-8 2xl:px-20`}
      >
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

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mt-8">
          <>
            {slice.primary.columns.map((item, index) => {
              return (
                <div
                  className="flex flex-col flex-start justify-start items-center gap-8 mt-8 sm:min-h-[200px] w-full lg:w-1/3"
                  key={index}
                >
                  {item.icons && <>{icons[item.icons]}</>}
                  <PrismicRichText
                    field={item.column_headeline}
                    components={components}
                  />
                  <PrismicRichText
                    field={item.column_description}
                    components={components}
                  />
                </div>
              );
            })}
          </>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-8">
          {slice.primary.show_primary_button ? (
            <ButtonSecoundary field={slice.primary.button_link}>
              <>{slice.primary.button_label}</>
            </ButtonSecoundary>
          ) : null}
        </div>
      </div>
    </Bounded>
  );
};

export default SectionColumns;

function DesignDisconnect() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" fill="none">
      <path
        fill="#FF611A"
        d="M23.502 1.007a22.43 22.43 0 0115.91 6.584 22.422 22.422 0 016.584 15.907H46v.004h-.004a22.422 22.422 0 01-6.585 15.907 22.43 22.43 0 01-15.91 6.584V46h-.003v-.007a22.43 22.43 0 01-15.91-6.584 22.443 22.443 0 01-6.58-15.91H1v-.005h.007A22.42 22.42 0 017.592 7.591a22.43 22.43 0 0115.91-6.584zm3.168 16.8a1.145 1.145 0 111.776-1.446c.073.092.176.187.293.286.593.487 1.505.813 2.472.864.952.051 1.93-.172 2.67-.773.15-.12.297-.27.44-.443a1.146 1.146 0 011.615-.16c.49.402.564 1.123.16 1.614-.23.282-.49.535-.772.765-1.223.993-2.765 1.363-4.234 1.286-1.45-.077-2.856-.597-3.809-1.377a4.226 4.226 0 01-.611-.615zM15.342 33.196a1.146 1.146 0 01-.099-2.289h.015c.747-.033 3.41-.022 6.409-.011 3.988.015 8.588.033 9.976-.048a1.147 1.147 0 01.136 2.29c-1.395.083-6.069.065-10.123.047-2.948-.011-5.563-.022-6.303.01h-.011zm-4.439-15.387a1.145 1.145 0 111.776-1.447c.074.092.176.187.293.286.594.487 1.506.813 2.473.864.952.051 1.93-.172 2.67-.773.15-.12.296-.27.439-.443a1.146 1.146 0 011.615-.16c.49.402.564 1.123.161 1.614-.23.282-.49.535-.773.765-1.223.993-2.765 1.363-4.233 1.286-1.45-.077-2.857-.597-3.81-1.377a4.226 4.226 0 01-.61-.615zm12.599-13.94v.007h-.004l.004-.008c-5.417 0-10.324 2.2-13.88 5.757a19.55 19.55 0 00-5.754 13.874h.007v.004h-.007a19.553 19.553 0 005.757 13.874 19.59 19.59 0 0013.88 5.757v-.008h.004v.008a19.56 19.56 0 0013.877-5.757 19.568 19.568 0 005.757-13.878h-.003v-.004h.003c0-5.412-2.2-10.319-5.753-13.874-3.564-3.552-8.471-5.753-13.888-5.753z"
      ></path>
      <path
        stroke="#FF611A"
        d="M23.502 1v.007m0 0a22.43 22.43 0 0115.91 6.584 22.422 22.422 0 016.584 15.907H46v.004h-.004a22.422 22.422 0 01-6.585 15.907 22.43 22.43 0 01-15.91 6.584V46h-.003v-.007a22.43 22.43 0 01-15.91-6.584 22.443 22.443 0 01-6.58-15.91H1v-.005h.007A22.42 22.42 0 017.592 7.591a22.43 22.43 0 0115.91-6.584zm0 2.86v.008h-.004l.004-.008zm0 0c-5.417 0-10.324 2.2-13.88 5.757a19.55 19.55 0 00-5.754 13.874h.007v.004h-.007a19.553 19.553 0 005.757 13.874 19.59 19.59 0 0013.88 5.757v-.008h.004v.008a19.56 19.56 0 0013.877-5.757 19.568 19.568 0 005.757-13.878h-.003v-.004h.003c0-5.412-2.2-10.319-5.753-13.874-3.564-3.552-8.471-5.753-13.888-5.753zm3.168 13.94a1.145 1.145 0 111.776-1.446c.073.092.176.187.293.286.593.487 1.505.813 2.472.864.952.051 1.93-.172 2.67-.773.15-.12.297-.27.44-.443a1.146 1.146 0 011.615-.16c.49.402.564 1.123.16 1.614-.23.282-.49.535-.772.765-1.223.993-2.765 1.363-4.234 1.286-1.45-.077-2.856-.597-3.809-1.377a4.226 4.226 0 01-.611-.615zM15.342 33.196a1.146 1.146 0 01-.099-2.289h.015c.747-.033 3.41-.022 6.409-.011 3.988.015 8.588.033 9.976-.048a1.147 1.147 0 01.136 2.29c-1.395.083-6.069.065-10.123.047-2.948-.011-5.563-.022-6.303.01h-.011zm-4.439-15.387a1.145 1.145 0 111.776-1.447c.074.092.176.187.293.286.594.487 1.506.813 2.473.864.952.051 1.93-.172 2.67-.773.15-.12.296-.27.439-.443a1.146 1.146 0 011.615-.16c.49.402.564 1.123.161 1.614-.23.282-.49.535-.773.765-1.223.993-2.765 1.363-4.233 1.286-1.45-.077-2.857-.597-3.81-1.377a4.226 4.226 0 01-.61-.615z"
      ></path>
    </svg>
  );
}

function BrowseZone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="none">
      <path
        stroke="#FF611A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M40.292 40.292l-7.625-7.625m-15.25 10.166h-7.125c-2.841 0-4.264 0-5.35-.553a5.083 5.083 0 01-2.221-2.223c-.554-1.087-.554-2.51-.554-5.357V10.3c0-2.846 0-4.271.554-5.358A5.08 5.08 0 014.94 2.72c1.088-.554 2.513-.554 5.36-.554h24.4c2.846 0 4.268 0 5.355.554a5.087 5.087 0 012.224 2.22c.553 1.087.553 2.51.553 5.351v7.125m-16.52 17.791a8.896 8.896 0 110-17.791 8.896 8.896 0 010 17.791z"
      ></path>
    </svg>
  );
}

function WebsiteBuildTrap() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" fill="none">
      <path
        stroke="#FF611A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M24.5 15.626v10M24.5 47C12.074 47 2 36.926 2 24.5S12.074 2 24.5 2 47 12.074 47 24.5 36.926 47 24.5 47zm.125-13.874v.25l-.25-.002v-.248h.25z"
      ></path>
    </svg>
  );
}

function ConversionFocusedDesign() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="45" fill="none">
      <path
        fill="#FF611A"
        d="M48.864 26.686c-1.011 5.198-3.876 9.767-7.9 13.038-4.05 3.29-9.264 5.272-14.951 5.272-5.345 0-10.275-1.748-14.206-4.687-4.02-3-6.991-7.246-8.307-12.141l2.903-.73c1.142 4.262 3.732 7.959 7.232 10.574 3.42 2.555 7.71 4.073 12.374 4.073 4.963 0 9.508-1.723 13.025-4.58 3.364-2.735 5.797-6.513 6.762-10.824h-3.102l4.651-5.48 4.65 5.48h-3.13v.005zm-22.927 1.588v-5.137c-1.87-.459-3.238-1.15-4.105-2.076-.872-.93-1.312-2.055-1.312-3.381 0-1.343.495-2.473 1.481-3.381.986-.913 2.298-1.437 3.936-1.576v-1.208h2.09v1.208c1.532.155 2.746.601 3.656 1.334.902.733 1.481 1.715 1.731 2.943l-3.652.401c-.224-.965-.804-1.62-1.735-1.964v4.793c2.31.528 3.885 1.22 4.718 2.063.838.848 1.257 1.932 1.257 3.259 0 1.482-.524 2.726-1.578 3.741-1.054 1.015-2.518 1.646-4.397 1.896v2.292h-2.09v-2.264c-1.65-.172-2.988-.692-4.025-1.568-1.037-.876-1.693-2.116-1.98-3.717l3.736-.376a3.77 3.77 0 00.864 1.69c.423.475.888.815 1.405 1.028zm0-12.882c-.563.172-1.008.454-1.334.847-.33.393-.49.827-.49 1.302 0 .434.148.835.448 1.207.3.369.762.672 1.38.897v-4.253h-.004zm2.09 13.087c.72-.136 1.312-.43 1.76-.88.457-.455.682-.987.682-1.605 0-.545-.19-1.02-.576-1.412-.376-.398-.998-.7-1.87-.913v4.81h.004zM3.157 18.314c1.003-5.153 3.825-9.685 7.79-12.951C15.01 2.018 20.27 0 26.01 0c5.048 0 9.72 1.556 13.533 4.2 3.914 2.714 6.919 6.574 8.497 11.077l-1.422.467-1.422.466a8.14 8.14 0 00-.122-.34c-1.401-3.77-3.97-7.003-7.279-9.3-3.318-2.3-7.384-3.655-11.781-3.655-5.01 0-9.594 1.752-13.123 4.658-3.318 2.73-5.709 6.476-6.67 10.741h3.086L4.65 23.796 0 18.314h3.157z"
      ></path>
    </svg>
  );
}

function HighEndBranding() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="45" fill="none">
      <g clipPath="url(#a)">
        <path
          fill="#FF611A"
          d="M.283 13.347L8.6.53a1.19 1.19 0 01.406-.39c.161-.092.34-.14.52-.14H42.45c.2 0 .395.06.569.17.173.11.318.268.42.46l8.253 12.689c.198.236.308.547.309.871 0 .327-.11.641-.31.881L27.105 44.593a1.161 1.161 0 01-.363.293 1.046 1.046 0 01-1.258-.227l-.067-.08L.317 15.08a1.354 1.354 0 01-.131-.19 1.406 1.406 0 01.11-1.525l-.013-.019zm18.78 2.127l7.174 24.098 7.037-24.098h-14.21zm16.619 0l-6.75 23.17 19.31-23.17h-12.56zm-12.094 23.24l-6.932-23.24H3.808l19.78 23.24zM11.705 2.568l5.806 9.42 6.208-9.42H11.705zm16.605 0l6.47 9.42 5.548-9.42H28.31zm14.185.947l-5.501 9.378h11.624L42.495 3.53v-.015zm-9.966 9.393L26.01 3.41l-6.264 9.496H32.53zm-17.231 0L9.504 3.5l-6.119 9.406h11.913z"
        ></path>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h52v45H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function GrowYourReach() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="32" fill="none">
      <path
        stroke="#FF611A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M2 20.75v3.375c0 2.1 0 3.15.409 3.952.36.705.933 1.28 1.638 1.64.801.408 1.851.408 3.947.408H35.75M2 20.75V2m0 18.75l7.225-6.02.006-.005c1.307-1.09 1.962-1.635 2.672-1.857a3.748 3.748 0 012.554.117c.688.285 1.291.888 2.497 2.095l.013.012c1.225 1.225 1.84 1.84 2.538 2.124a3.752 3.752 0 002.596.085c.72-.238 1.376-.812 2.688-1.96L35.75 5.75"
      ></path>
    </svg>
  );
}
