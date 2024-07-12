import { createClient } from "@/prismicio";
import Bounded from "./Bounded";
import SocialIcons from "./SocialIcons";
import WhiteLogo from "./WhiteLogo";

export default async function Footer() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <Bounded as="footer" className="bg-black border-t-[1px] border-grey-200">
      <div className="container mx-auto max-w-screen-2xl w-full flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 p-5">
        <div className="flex flex-col items-center sm:justify-between sm:items-start flex-wrap gap-9 pt-6">
          <WhiteLogo />
          <p className="text-center sm:text-right text-white font-thin">
            &#169; Clicks Design {new Date().getFullYear()}. All rights
            reserved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 ">
          <SocialIcons />
        </div>
      </div>
    </Bounded>
  );
}
