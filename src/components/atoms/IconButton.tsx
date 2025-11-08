import { ButtonHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  variant?: 'default' | 'ghost' | 'primary';
  size?: 'sm' | 'md' | 'lg';
}

export const IconButton = ({
  icon: Icon,
  variant = 'default',
  size = 'md',
  className,
  ...props
}: IconButtonProps) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSizes = {
    sm: 18,
    md: 20,
    lg: 24,
  };

  const variants = {
    default: 'bg-card hover:bg-muted border border-border shadow-sm',
    ghost: 'hover:bg-muted',
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  };

  return (
    <button
      className={cn(
        'rounded-full flex items-center justify-center transition-all active:scale-95',
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    >
      <Icon size={iconSizes[size]} strokeWidth={2} />
    </button>
  );
};
