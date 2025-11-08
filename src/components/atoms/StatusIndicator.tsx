import { CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface StatusIndicatorProps {
  status: 'active' | 'inactive' | 'pending';
  size?: 'sm' | 'md' | 'lg';
  style?: CSSProperties;
  className?: string;
}

export const StatusIndicator = ({
  status,
  size = 'md',
  style,
  className = '',
}: StatusIndicatorProps) => {
  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  const colors = {
    active: 'bg-success',
    inactive: 'bg-muted-foreground',
    pending: 'bg-brand-yellow',
  };

  return (
    <span
      style={style}
      className={cn(
        'rounded-full inline-block',
        sizes[size],
        colors[status],
        className
      )}
    />
  );
};
