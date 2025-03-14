import React from "react";
import { cn } from "@/lib/utils"; // or use a relative path if alias isn't working

export const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-2xl bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-blue-700 transition",
        className
      )}
      {...props}
    />
  );
});

Button.displayName = "Button";
