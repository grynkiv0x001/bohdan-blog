import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight text-balance',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight text-balance',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      p: 'leading-7 not-first:mt-6',
    },
  },
});

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'p';

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  variant?: TypographyVariant;
  as?: TypographyVariant;
}

function Typography({
  className,
  variant = 'p',
  as,
  ...props
}: TypographyProps) {
  const Component = (as || variant) as TypographyVariant;

  switch (Component) {
  case 'h1':
    return (
      <h1 className={cn(typographyVariants({ variant }), className)} {...props} />
    );
  case 'h2':
    return (
      <h2 className={cn(typographyVariants({ variant }), className)} {...props} />
    );
  case 'h3':
    return (
      <h3 className={cn(typographyVariants({ variant }), className)} {...props} />
    );
  default:
    return (
      <p className={cn(typographyVariants({ variant }), className)} {...props} />
    );
  }
}

export { Typography, typographyVariants };
