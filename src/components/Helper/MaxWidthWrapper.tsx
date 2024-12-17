import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-10 space-y-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;