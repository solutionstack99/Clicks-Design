"use client";

import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

export default function HeroPattern() {
  return (
    <InteractiveGridPattern
      className={cn(
        "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        "absolute inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 z-0"
      )}
    />
  );
}
