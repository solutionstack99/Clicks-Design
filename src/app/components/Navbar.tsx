import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";

export default async function Navbar() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <nav className="bg-secondary rounded-full py-5 px-10">
      <ul className="flex flex-col sm:flex-row gap-10 items-center">
        {settings.data.navigation.map(({ link, label }) => (
          <li key={label} className="font-lato text-white">
            <PrismicNextLink
              field={link}
              className="relative after:nav-stroke hover:after:nav-stroke-hover"
            >
              {label}
            </PrismicNextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
