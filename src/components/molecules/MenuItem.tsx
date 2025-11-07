import { LucideIcon, ChevronRight } from 'lucide-react';
import { Text } from '../atoms/Text';
import { Badge } from '../atoms/Badge';

interface MenuItemProps {
  icon: LucideIcon;
  label: string;
  color: string;
  hasChevron?: boolean;
  badge?: string;
  value?: string;
  hasToggle?: boolean;
  toggleValue?: boolean;
  onToggle?: (value: boolean) => void;
  onClick?: () => void;
}

export const MenuItem = ({
  icon: Icon,
  label,
  color,
  hasChevron = false,
  badge,
  value,
  hasToggle = false,
  toggleValue = false,
  onToggle,
  onClick,
}: MenuItemProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        background: '#FFFFFF',
        border: '2px solid #2D3561',
        borderRadius: '12px',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer',
        marginBottom: '12px',
        boxShadow: '4px 4px 0px rgba(45, 53, 97, 0.3)',
        transition: 'all 0.2s',
      }}
    >
      <div
        style={{
          width: '40px',
          height: '40px',
          background: color,
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #2D3561',
        }}
      >
        <Icon size={20} color="#FFFFFF" strokeWidth={2.5} />
      </div>

      <Text variant="body" weight="bold" font="jakarta" style={{ flex: 1, textAlign: 'left' }}>
        {label}
      </Text>

      {badge && <Badge variant="default" size="sm">{badge}</Badge>}
      {value && (
        <Text variant="body-small" weight="semibold" color="#808080">
          {value}
        </Text>
      )}
      {hasToggle && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            onToggle?.(!toggleValue);
          }}
          style={{
            width: '44px',
            height: '24px',
            background: toggleValue ? '#00C896' : '#E0E0E0',
            borderRadius: '12px',
            position: 'relative',
            cursor: 'pointer',
            transition: 'all 0.2s',
            border: '2px solid #2D3561',
          }}
        >
          <div
            style={{
              width: '16px',
              height: '16px',
              background: '#FFFFFF',
              borderRadius: '50%',
              position: 'absolute',
              top: '2px',
              left: toggleValue ? '22px' : '2px',
              transition: 'all 0.2s',
              border: '2px solid #2D3561',
            }}
          />
        </div>
      )}
      {hasChevron && <ChevronRight size={20} color="#808080" strokeWidth={2.5} />}
    </button>
  );
};
