import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-smooth",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-smooth",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-smooth",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-smooth",
        link: "text-primary underline-offset-4 hover:underline transition-smooth",
        emergency: "gradient-emergency shadow-emergency text-emergency-foreground hover:opacity-90 font-bold hover-lift",
        authority: "gradient-authority shadow-glow text-authority-foreground hover:opacity-90 hover-lift",
        warning: "gradient-warning shadow-vibrant text-warning-foreground hover:opacity-90 hover-lift",
        success: "gradient-success shadow-card text-success-foreground hover:opacity-90 hover-lift",
        panic: "gradient-emergency shadow-emergency text-emergency-foreground hover:opacity-90 font-bold text-lg emergency-pulse hover-lift",
        vibrant: "gradient-vibrant shadow-vibrant text-white hover:opacity-90 font-bold hover-lift shimmer-effect",
        info: "bg-info text-info-foreground hover:bg-info/90 transition-bounce hover-lift",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
