import { CSSProperties } from 'react';

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
    sm: { width: '36px', height: '36px', fontSize: '16px' },
    md: { width: '44px', height: '44px', fontSize: '20px' },
    lg: { width: '54px', height: '54px', fontSize: '24px' },
    xl: { width: '72px', height: '72px', fontSize: '32px' },
  };

  return (
    <div
      style={{
        ...sizes[size],
        borderRadius: '50%',
        background: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '800',
        color: '#FFFFFF',
        border: '3px solid #2D3561',
        boxShadow: '4px 4px 0px #2D3561',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        ...style,
      }}
      className={className}
    >
      {initial}
    </div>
  );
};
