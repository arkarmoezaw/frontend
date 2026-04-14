import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "bg-input/50 file:text-foreground h-10 w-full min-w-0 rounded-md border border-slate-200 px-3 py-1 text-base text-slate-800 transition-[color,box-shadow,background-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-500 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
