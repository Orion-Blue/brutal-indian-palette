import { CSSProperties, ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  variant?: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'body-large' | 'body' | 'body-small' | 'caption' | 'micro' | 'tiny';
  weight?: 'regular' | 'semibold' | 'bold' | 'extrabold';
  color?: string;
  font?: 'inter' | 'jakarta' | 'mono';
  uppercase?: boolean;
  style?: CSSProperties;
  className?: string;
}

export const Text = ({
  children,
  variant = 'body',
  weight = 'regular',
  color = '#1A1A1A',
  font = 'inter',
  uppercase = false,
  style,
  className = '',
}: TextProps) => {
  const fontFamilies = {
    inter: "'Inter', sans-serif",
    jakarta: "'Plus Jakarta Sans', sans-serif",
    mono: "'Courier New', monospace",
  };

  const fontSizes = {
    display: '32px',
    h1: '24px',
    h2: '20px',
    h3: '18px',
    h4: '16px',
    'body-large': '16px',
    body: '14px',
    'body-small': '13px',
    caption: '12px',
    micro: '11px',
    tiny: '10px',
  };

  const fontWeights = {
    regular: '400',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  };

  return (
    <span
      style={{
        fontSize: fontSizes[variant],
        fontWeight: fontWeights[weight],
        color,
        fontFamily: fontFamilies[font],
        textTransform: uppercase ? 'uppercase' : 'none',
        ...style,
      }}
      className={className}
    >
      {children}
    </span>
  );
};
