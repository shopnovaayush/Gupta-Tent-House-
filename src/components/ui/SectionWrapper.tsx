/**
 * GUPTA TENT HOUSE — SectionWrapper UI Component
 * SESSION 01 — Project Foundation
 */


import { cn } from "@/utils/cn";
import type { SectionProps } from "@/types";

export function SectionWrapper({
  id,
  className,
  children,
  containerClassName,
  padded = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(padded && "section-py", className)}
    >
      <div className={cn("container-site", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
