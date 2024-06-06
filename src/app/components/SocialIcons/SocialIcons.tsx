import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

const icons = {
  x: <XIcon />,
  linkedin: <LnkedinIcon />,
  email: <EmailIcon />,
};

export default async function SocialIcons() {
  const client = createClient();
  const item = await client.getSingle("social_icons");

  return (
    <div className="flex flex-col flex-1 items-center md:items-left">
      <ul
        className="flex flex-row justify-center items-center gap-2 mt-5"
        key={item.id}
      >
        {item.data.icons.map((item, index) => {
          return (
            <li key={index} className="text-center md:text-left">
              <PrismicNextLink
                key={index}
                field={item.link}
                className="flex flex-col justify-center items-center w-9 h-9 transition-colors duration-300 ease-in-out hover:fill-primary"
              >
                {item.social_icons && <>{icons[item.social_icons]}</>}
              </PrismicNextLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="29"
      fill="black"
      className="group"
    >
      <path
        fill="none"
        stroke="#050505"
        d="M25.03 1.112L5.04 28H1.113L20.986 1.112h4.044z"
        className="group-hover:fill-none group-hover:stroke-primary"
      ></path>
      <mask
        id="a"
        fill="none"
        className="group-hover:fill-primary group-hover:stroke-primary"
      >
        <path
          d="M8.34 1.112H0L18.506 28H26.7L8.339 1.112z"
          className="group-hover:fill-primary group-hover:stroke-primary"
        ></path>
      </mask>
      <path
        d="M8.34 1.112H0L18.506 28H26.7L8.339 1.112z"
        className="group-hover:fill-primary group-hover:stroke-primary"
      ></path>
      <path
        d="M0 1.112v-8h-15.218L-6.59 5.648 0 1.112zm8.34 0l6.606-4.51-2.382-3.49H8.34v8zM26.699 28v8h15.15l-8.543-12.511-6.607 4.51zm-8.193 0l-6.59 4.536L14.301 36h4.205v-8zM0 9.112h8.34v-16H0v16zm1.733-3.489l18.359 26.888 13.214-9.022L14.946-3.4 1.733 5.623zM26.699 20h-8.193v16H26.7V20zm-1.603 3.464L6.59-3.423-6.59 5.648l18.506 26.888 13.18-9.072z"
        mask="url(#a)"
        className="group-hover:fill-primary group-hover:stroke-primary"
      ></path>
    </svg>
  );
}

function LnkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="black"
      className="group"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M13.902-.008C6.312-.008.16 6.188.16 13.832c0 7.642 6.153 13.838 13.742 13.838 7.59 0 13.742-6.196 13.742-13.839 0-7.643-6.152-13.839-13.742-13.839zM6.757 11.454h3.115v9.424H6.757v-9.424zm3.32-2.915c-.02-.924-.676-1.627-1.742-1.627-1.065 0-1.762.703-1.762 1.627 0 .905.676 1.63 1.722 1.63h.02c1.086 0 1.762-.725 1.762-1.63zm7.44 2.694c2.05 0 3.586 1.347 3.586 4.242v5.403h-3.114v-5.042c0-1.266-.451-2.13-1.578-2.13-.86 0-1.373.582-1.598 1.145-.083.201-.103.482-.103.764v5.263h-3.115s.042-8.54 0-9.423h3.115v1.334c.413-.641 1.154-1.556 2.807-1.556z"
        clipRule="evenodd"
        className="group-hover:fill-primary group-hover:stroke-primary"
      ></path>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="black"
      className="group"
    >
      <path
        fill="#0B0B0B"
        fillRule="evenodd"
        d="M14.176-.008C6.586-.008.434 6.188.434 13.832c0 7.642 6.152 13.838 13.742 13.838 7.59 0 13.742-6.196 13.742-13.839 0-7.643-6.153-13.839-13.742-13.839zM6.159 13.808c0-4.438 3.596-8.05 8.017-8.05 4.42 0 8.016 3.612 8.016 8.05 0 .63-.052 1.138-.17 1.65l-.001.008c0 .001-.058.237-.09.34-.198.636-.557 1.166-1.038 1.532a2.7 2.7 0 01-1.842.543 2.605 2.605 0 01-2.003-1.203 4.014 4.014 0 01-2.872 1.202c-2.236 0-4.055-1.826-4.055-4.072 0-2.245 1.819-4.071 4.054-4.071 2.236 0 4.055 1.826 4.055 4.071v1.313c.003.766.515 1.079.953 1.114.434.034 1.013-.22 1.215-1.05.1-.456.15-.92.15-1.377 0-3.528-2.859-6.4-6.372-6.4-3.514 0-6.373 2.872-6.373 6.4 0 3.53 2.859 6.4 6.372 6.4a6.32 6.32 0 003.44-1.014l.019-.012 1.08 1.26-.023.016a7.946 7.946 0 01-4.515 1.4c-4.42 0-8.017-3.61-8.017-8.05z"
        clipRule="evenodd"
        className="group-hover:fill-primary group-hover:stroke-primary"
      ></path>
      <path
        fill="#0B0B0B"
        fillRule="evenodd"
        d="M16.587 13.809a2.42 2.42 0 01-2.412 2.421 2.419 2.419 0 01-2.41-2.421 2.419 2.419 0 012.41-2.422 2.42 2.42 0 012.412 2.422z"
        clipRule="evenodd"
        className="group-hover:fill-primary group-hover:stroke-primary"
      ></path>
    </svg>
  );
}
