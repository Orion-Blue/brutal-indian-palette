import { Bell } from 'lucide-react';
import { Text } from '../atoms/Text';
import { IconButton } from '../atoms/IconButton';
import { Badge } from '../atoms/Badge';

interface HeaderProps {
  title: string;
  icon?: React.ReactNode;
  showNotification?: boolean;
  notificationCount?: number;
  onNotificationClick?: () => void;
  onBackClick?: () => void;
}

export const Header = ({
  title,
  icon,
  showNotification = true,
  notificationCount = 0,
  onNotificationClick,
  onBackClick,
}: HeaderProps) => {
  return (
    <>
      {/* Status Bar */}
      <div
        style={{
          padding: '12px 20px 8px',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '14px',
          fontWeight: '600',
          color: '#1A1A1A',
        }}
      >
        <span>9:41</span>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <div style={{ width: '16px', height: '10px', border: '1.5px solid #1A1A1A', borderRadius: '2px', position: 'relative' }}>
            <div style={{ position: 'absolute', right: '-3px', top: '2px', width: '1.5px', height: '4px', background: '#1A1A1A' }}></div>
          </div>
          <svg width="16" height="12" viewBox="0 0 16 12">
            <path d="M1 6C1 6 3 2 8 2C13 2 15 6 15 6C15 6 13 10 8 10C3 10 1 6 1 6Z" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      </div>

      {/* Header */}
      <div
        style={{
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#FFF5E0',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {icon}
          <Text variant="h4" weight="extrabold" font="jakarta" uppercase>
            {title}
          </Text>
        </div>

        {showNotification && (
          <div style={{ position: 'relative' }}>
            <IconButton icon={Bell} variant="colored" color="#FF6B35" onClick={onNotificationClick} />
            {notificationCount > 0 && (
              <div
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  width: '20px',
                  height: '20px',
                  background: '#FF6B35',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #2D3561',
                }}
              >
                <Text variant="tiny" weight="extrabold" color="#FFFFFF">
                  {notificationCount}
                </Text>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
