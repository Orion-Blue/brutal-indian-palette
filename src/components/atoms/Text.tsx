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
    display: 'text-[40px] leading-tight',     // 40px (1.333^4)
    h1: 'text-[32px] leading-tight',          // 32px (1.333^3)
    h2: 'text-2xl leading-snug',              // 24px (1.333^2)
    h3: 'text-lg leading-normal',             // 18px (1.333^1)
    h4: 'text-base leading-normal',           // 16px (base)
    'body-large': 'text-[15px] leading-relaxed', // 15px
    body: 'text-sm leading-relaxed',          // 14px
    'body-small': 'text-xs leading-relaxed',  // 12px
    caption: 'text-[11px] leading-tight',     // 11px
    micro: 'text-[10px] leading-tight',       // 10px
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
