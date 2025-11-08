import { CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps {
  initial: string;
  color: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  style?: CSSProperties;
  className?: string;
}

export const Avatar = ({
  initial,
  color,
  size = 'md',
  style,
  className = '',
}: AvatarProps) => {
  const sizes = {
    sm: 'w-9 h-9 text-sm',
    md: 'w-11 h-11 text-base',
    lg: 'w-14 h-14 text-lg',
    xl: 'w-20 h-20 text-2xl',
  };

  return (
    <div
      style={{
        backgroundColor: color,
        ...style,
      }}
      className={cn(
        'rounded-full flex items-center justify-center font-bold text-white',
        sizes[size],
        className
      )}
    >
      {initial}
    </div>
  );
};
