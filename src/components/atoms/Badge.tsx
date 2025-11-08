import { CSSProperties, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
  style?: CSSProperties;
  className?: string;
}

export const Badge = ({
  children,
  variant = 'default',
  style,
  className = '',
}: BadgeProps) => {
  const variants = {
    default: 'bg-muted text-muted-foreground',
    success: 'bg-success/10 text-success',
    warning: 'bg-brand-yellow/10 text-brand-yellow',
    error: 'bg-destructive/10 text-destructive',
  };

  return (
    <span
      style={style}
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
