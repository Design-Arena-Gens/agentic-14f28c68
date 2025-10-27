'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full border border-transparent font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-40',
  {
    variants: {
      variant: {
        accent: 'bg-accent text-white shadow-lg shadow-accent/30 hover:bg-[#ff8d26] focus-visible:bg-[#ff8d26]',
        secondary: 'bg-white/90 text-bark shadow-md hover:bg-white focus-visible:bg-white/95',
        outline: 'border-bark/20 bg-transparent text-bark hover:border-bark/40 hover:bg-bark/5',
        ghost: 'bg-transparent text-bark hover:bg-bark/5'
      },
      size: {
        sm: 'px-3.5 py-2 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-6 py-3 text-lg',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'accent',
      size: 'md'
    }
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  }
);

Button.displayName = 'Button';

export { buttonVariants };
