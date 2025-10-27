import Link from 'next/link';
import { buttonVariants, type ButtonProps } from './Button';
import { cn } from '@/lib/utils';

interface ButtonLinkProps extends Pick<ButtonProps, 'variant' | 'size'> {
  href: string;
  children: React.ReactNode;
  className?: string;
  prefetch?: boolean;
}

export function ButtonLink({ href, children, className, variant, size, prefetch }: ButtonLinkProps) {
  return (
    <Link prefetch={prefetch} href={href} className={cn(buttonVariants({ variant, size }), className)}>
      {children}
    </Link>
  );
}
