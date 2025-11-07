import { Text } from '../atoms/Text';
import { Badge } from '../atoms/Badge';
import { StatusIndicator } from '../atoms/StatusIndicator';

interface BalanceCardProps {
  balance: number;
  label: string;
  accountNumber: string;
  type: string;
  validThru: string;
  status: string;
  gradient: string;
  textColor?: string;
}

export const BalanceCard = ({
  balance,
  label,
  accountNumber,
  type,
  validThru,
  status,
  gradient,
  textColor = '#FFFFFF',
}: BalanceCardProps) => {
  return (
    <div
      style={{
        background: gradient,
        borderRadius: '24px',
        padding: '28px',
        minWidth: '280px',
        border: '3px solid #2D3561',
        boxShadow: '8px 8px 0px rgba(45, 53, 97, 0.4)',
      }}
    >
      <div style={{ marginBottom: '32px' }}>
        <Text variant="caption" weight="bold" color={textColor} style={{ opacity: 0.9, marginBottom: '8px', display: 'block' }}>
          {label}
        </Text>
        <Text variant="display" weight="extrabold" color={textColor} font="jakarta">
          ₹{balance.toLocaleString()}
        </Text>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <Text variant="tiny" weight="bold" color={textColor} style={{ opacity: 0.8, marginBottom: '4px', display: 'block' }}>
            ACCOUNT NUMBER
          </Text>
          <Text variant="body-small" weight="bold" color={textColor} font="mono">
            {accountNumber}
          </Text>
          <div style={{ marginTop: '12px' }}>
            <Text variant="tiny" weight="bold" color={textColor} style={{ opacity: 0.8, marginBottom: '4px', display: 'block' }}>
              {type}
            </Text>
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <Text variant="tiny" weight="bold" color={textColor} style={{ opacity: 0.8, marginBottom: '4px', display: 'block' }}>
            VALID THRU
          </Text>
          <Text variant="body-small" weight="bold" color={textColor} font="mono">
            {validThru}
          </Text>
          <div
            style={{
              marginTop: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: 'rgba(255,255,255,0.2)',
              padding: '4px 8px',
              borderRadius: '6px',
              justifyContent: 'flex-end',
            }}
          >
            <StatusIndicator status="active" size="sm" />
            <Text variant="tiny" weight="bold" color={textColor}>
              {status}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
