import { forwardRef } from "react";
import { cn } from "~/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        className
      )}
      {...props}
    />
  )
);

Badge.displayName = "Badge";

export { Badge };
