import { forwardRef } from "react";
import { cn } from "~/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 text-white shadow-[0_14px_40px_-16px_rgba(14,165,233,0.9)] hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-20px_rgba(99,102,241,0.9)]",
      secondary:
        "bg-slate-900 text-white shadow-lg hover:bg-slate-800 dark:bg-white/90 dark:text-slate-900 dark:hover:bg-white",
      outline:
        "border border-slate-300/80 bg-white/70 text-slate-700 hover:bg-white dark:border-white/20 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-5 text-sm",
      lg: "h-12 px-8 text-base",
    };

    return (
      <button
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
