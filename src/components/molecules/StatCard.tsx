import { Text } from '../atoms/Text';

interface StatCardProps {
  label: string;
  value: string;
  color: string;
  icon: string;
}

export const StatCard = ({ label, value, color, icon }: StatCardProps) => {
  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '2px solid #2D3561',
        borderRadius: '16px',
        padding: '16px',
        textAlign: 'center',
        boxShadow: '6px 6px 0px #2D3561',
        transition: 'all 0.2s',
      }}
    >
      <div
        style={{
          fontSize: '24px',
          marginBottom: '8px',
        }}
      >
        {icon}
      </div>
      <Text variant="h3" weight="extrabold" color={color} font="jakarta" style={{ marginBottom: '4px', display: 'block' }}>
        {value}
      </Text>
      <Text variant="caption" weight="semibold" color="#808080">
        {label}
      </Text>
    </div>
  );
};
