import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

const icons = {
  x: <XIcon />,
  youtube: <YouTubeIcon />,
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
      width="28"
      height="28"
      fill="white"
      className="bi bi-twitter-x"
      viewBox="0 0 16 16"
    >
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="white"
      className="bi bi-youtube"
      viewBox="0 0 16 16"
    >
      <path d="M8.051 1.999c-3.866 0-7.051 3.134-7.051 7s3.185 7 7.051 7 7.051-3.134 7.051-7-3.185-7-7.051-7zm0 12.5c-3.032 0-5.5-2.468-5.5-5.5s2.468-5.5 5.5-5.5 5.5 2.468 5.5 5.5-2.468 5.5-5.5 5.5zm-1.5-8.5v6l5-3-5-3z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="white"
      className="group"
    >
      <path
        fill="white"
        fillRule="evenodd"
        d="M14.176-.008C6.586-.008.434 6.188.434 13.832c0 7.642 6.152 13.838 13.742 13.838 7.59 0 13.742-6.196 13.742-13.839 0-7.643-6.153-13.839-13.742-13.839zM6.159 13.808c0-4.438 3.596-8.05 8.017-8.05 4.42 0 8.016 3.612 8.016 8.05 0 .63-.052 1.138-.17 1.65l-.001.008c0 .001-.058.237-.09.34-.198.636-.557 1.166-1.038 1.532a2.7 2.7 0 01-1.842.543 2.605 2.605 0 01-2.003-1.203 4.014 4.014 0 01-2.872 1.202c-2.236 0-4.055-1.826-4.055-4.072 0-2.245 1.819-4.071 4.054-4.071 2.236 0 4.055 1.826 4.055 4.071v1.313c.003.766.515 1.079.953 1.114.434.034 1.013-.22 1.215-1.05.1-.456.15-.92.15-1.377 0-3.528-2.859-6.4-6.372-6.4-3.514 0-6.373 2.872-6.373 6.4 0 3.53 2.859 6.4 6.372 6.4a6.32 6.32 0 003.44-1.014l.019-.012 1.08 1.26-.023.016a7.946 7.946 0 01-4.515 1.4c-4.42 0-8.017-3.61-8.017-8.05z"
        clipRule="evenodd"
        className="group-hover:fill-primary group-hover:stroke-primary"
      ></path>
      <path
        fill="white"
        fillRule="evenodd"
        d="M16.587 13.809a2.42 2.42 0 01-2.412 2.421 2.419 2.419 0 01-2.41-2.421 2.419 2.419 0 012.41-2.422 2.42 2.42 0 012.412 2.422z"
        clipRule="evenodd"
        className="group-hover:fill-primary group-hover:stroke-primary"
      ></path>
    </svg>
  );
}
