import { TransactionItem } from '../molecules/TransactionItem';
import { Text } from '../atoms/Text';
import { LucideIcon } from 'lucide-react';

interface Transaction {
  id: number;
  name: string;
  time: string;
  status: 'COMPLETED' | 'PENDING' | 'FAILED';
  amount: number;
  type: 'credit' | 'debit';
  icon: LucideIcon;
  bgColor: string;
  isUser?: boolean;
}

interface TransactionGroup {
  date: string;
  transactions: Transaction[];
}

interface TransactionListProps {
  groups: TransactionGroup[];
  onTransactionClick?: (transaction: Transaction) => void;
}

export const TransactionList = ({ groups, onTransactionClick }: TransactionListProps) => {
  return (
    <div style={{ padding: '0 20px 24px' }}>
      <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text variant="h3" weight="extrabold" font="jakarta" uppercase>
          Transactions
        </Text>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {groups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <Text
              variant="caption"
              weight="extrabold"
              color="#808080"
              font="jakarta"
              uppercase
              style={{ marginBottom: '12px', display: 'block' }}
            >
              {group.date}
            </Text>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {group.transactions.map((transaction) => (
                <TransactionItem
                  key={transaction.id}
                  {...transaction}
                  initial={transaction.isUser ? transaction.name.charAt(0) : undefined}
                  onClick={() => onTransactionClick?.(transaction)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
