"use client";

import React, { forwardRef } from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from '@/context/lib/utils'

const Switch = forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <SwitchPrimitives.Root
      ref={ref}
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[#98A3A9] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-white data-[state=checked]:border-primary data-[state=unchecked]:bg-[#545454]/10",
        className
      )}
      {...rest}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-white border shadow-xl ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitives.Root>
  );
});

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };

