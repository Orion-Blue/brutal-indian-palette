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
    display: 'text-4xl',      // 36px
    h1: 'text-3xl',           // 30px
    h2: 'text-2xl',           // 24px
    h3: 'text-xl',            // 20px
    h4: 'text-lg',            // 18px
    'body-large': 'text-base',// 16px
    body: 'text-sm',          // 14px
    'body-small': 'text-xs',  // 12px
    caption: 'text-xs',       // 12px
    micro: 'text-[10px]',     // 10px
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
