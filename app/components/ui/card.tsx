import { forwardRef } from "react";
import { cn } from "~/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-lg border shadow-sm", className)}
      {...props}
    />
  )
);

Card.displayName = "Card";

export { Card };
