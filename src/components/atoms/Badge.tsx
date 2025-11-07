import { CSSProperties, ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
  style?: CSSProperties;
  className?: string;
}

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  style,
  className = '',
}: BadgeProps) => {
  const variants = {
    default: { background: '#808080', color: '#FFFFFF' },
    success: { background: '#00C896', color: '#FFFFFF' },
    warning: { background: '#FFD93D', color: '#1A1A1A' },
    error: { background: '#FF6B35', color: '#FFFFFF' },
  };

  const sizes = {
    sm: { padding: '2px 8px', fontSize: '10px' },
    md: { padding: '4px 12px', fontSize: '12px' },
  };

  return (
    <span
      style={{
        ...variants[variant],
        ...sizes[size],
        borderRadius: '6px',
        fontWeight: '700',
        letterSpacing: '0.5px',
        display: 'inline-block',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        textTransform: 'uppercase',
        ...style,
      }}
      className={className}
    >
      {children}
    </span>
  );
};
