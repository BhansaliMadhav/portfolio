import { forwardRef } from "react";
import { cn } from "~/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-white/70 bg-white/80 shadow-[0_20px_60px_-40px_rgba(2,132,199,0.55)] backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/45",
        className
      )}
      {...props}
    />
  )
);

Card.displayName = "Card";

export { Card };
