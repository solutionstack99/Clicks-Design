"use client";

import { ReactTyped } from "react-typed";

export default function Typing() {
  return (
    <div>
      <h1 className="font-lato text-balance text-2xl md:text-3xl w-full leading-10 md:leading-none text-center text-black pt-2.5 pb-7">
        <ReactTyped
          strings={["drive sales.", "double leads.", "rule them all. "]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar="|"
          showCursor={true}
        />
      </h1>
    </div>
  );
}
