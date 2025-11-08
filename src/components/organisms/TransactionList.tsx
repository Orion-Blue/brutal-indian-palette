import { TransactionItem } from '../molecules/TransactionItem';
import { Text } from '../atoms/Text';
import { cn } from '@/lib/utils';

interface Transaction {
  id: string;
  name: string;
  type: string;
  amount: string;
  date: string;
  initial: string;
  color: string;
  isPositive?: boolean;
}

interface TransactionListProps {
  title?: string;
  transactions: Transaction[];
  onTransactionClick?: (id: string) => void;
  className?: string;
}

export const TransactionList = ({
  title,
  transactions,
  onTransactionClick,
  className,
}: TransactionListProps) => {
  return (
    <div className={cn('space-y-1', className)}>
      {title && (
        <Text variant="body" weight="semibold" className="text-foreground px-5 py-2 block">
          {title}
        </Text>
      )}
      <div className="space-y-1">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            name={transaction.name}
            type={transaction.type}
            amount={transaction.amount}
            date={transaction.date}
            initial={transaction.initial}
            color={transaction.color}
            isPositive={transaction.isPositive}
            onClick={() => onTransactionClick?.(transaction.id)}
          />
        ))}
      </div>
    </div>
  );
};
