import { LucideIcon } from 'lucide-react';
import { Avatar } from '../atoms/Avatar';
import { Badge } from '../atoms/Badge';
import { Text } from '../atoms/Text';
import { ChevronRight } from 'lucide-react';

interface TransactionItemProps {
  name: string;
  time: string;
  status: 'COMPLETED' | 'PENDING' | 'FAILED';
  amount: number;
  type: 'credit' | 'debit';
  icon: LucideIcon;
  bgColor: string;
  initial?: string;
  onClick?: () => void;
}

export const TransactionItem = ({
  name,
  time,
  status,
  amount,
  type,
  icon: Icon,
  bgColor,
  initial,
  onClick,
}: TransactionItemProps) => {
  const statusVariant = status === 'COMPLETED' ? 'success' : status === 'PENDING' ? 'warning' : 'error';

  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        background: '#FFFFFF',
        border: '2px solid #2D3561',
        borderRadius: '16px',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        boxShadow: '6px 6px 0px #2D3561',
      }}
    >
      {initial ? (
        <Avatar initial={initial} color={bgColor} size="md" />
      ) : (
        <div
          style={{
            width: '44px',
            height: '44px',
            background: bgColor,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #2D3561',
          }}
        >
          <Icon size={20} color="#FFFFFF" strokeWidth={2.5} />
        </div>
      )}

      <div style={{ flex: 1, textAlign: 'left' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <Text variant="body" weight="extrabold" font="jakarta" uppercase>
            {name}
          </Text>
          <Badge variant={statusVariant} size="sm">
            {status}
          </Badge>
        </div>
        <Text variant="caption" color="#808080">
          {time}
        </Text>
      </div>

      <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Text
          variant="body"
          weight="extrabold"
          font="jakarta"
          color={type === 'credit' ? '#00C896' : '#FF6B35'}
        >
          {type === 'credit' ? '+' : '-'}₹{amount.toLocaleString()}
        </Text>
        <ChevronRight size={20} color="#808080" strokeWidth={2} />
      </div>
    </button>
  );
};
