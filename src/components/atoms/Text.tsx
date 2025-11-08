import { CSSProperties, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TextProps {
  children: ReactNode;
  variant?: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'body-large' | 'body' | 'body-small' | 'caption' | 'micro';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  className?: string;
  style?: CSSProperties;
}

export const Text = ({
  children,
  variant = 'body',
  weight = 'normal',
  className = '',
  style,
}: TextProps) => {
  const variants = {
    display: 'text-4xl',
    h1: 'text-2xl',
    h2: 'text-xl',
    h3: 'text-lg',
    h4: 'text-base',
    'body-large': 'text-base',
    body: 'text-sm',
    'body-small': 'text-xs',
    caption: 'text-xs',
    micro: 'text-[10px]',
  };

  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  return (
    <span
      style={style}
      className={cn(variants[variant], weights[weight], className)}
    >
      {children}
    </span>
  );
};
