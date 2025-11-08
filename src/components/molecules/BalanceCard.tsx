import { Text } from '../atoms/Text';
import { StatusIndicator } from '../atoms/StatusIndicator';
import { cn } from '@/lib/utils';

interface BalanceCardProps {
  balance: number;
  label: string;
  accountNumber: string;
  type: string;
  validThru: string;
  status: string;
  gradient: string;
  textColor?: string;
  className?: string;
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
  className,
}: BalanceCardProps) => {
  return (
    <div
      style={{
        background: gradient,
      }}
      className={cn(
        'rounded-3xl p-7 min-w-[280px] shadow-xl',
        className
      )}
    >
      <div className="mb-8">
        <Text variant="caption" weight="semibold" className="opacity-90 mb-2 block" style={{ color: textColor }}>
          {label}
        </Text>
        <Text variant="display" weight="bold" style={{ color: textColor }}>
          ₹{balance.toLocaleString()}
        </Text>
      </div>

      <div className="flex justify-between items-end">
        <div>
          <Text variant="micro" weight="semibold" className="opacity-80 mb-1 block" style={{ color: textColor }}>
            ACCOUNT NUMBER
          </Text>
          <Text variant="body-small" weight="semibold" className="font-mono" style={{ color: textColor }}>
            {accountNumber}
          </Text>
          <div className="mt-3">
            <Text variant="micro" weight="semibold" className="opacity-80" style={{ color: textColor }}>
              {type}
            </Text>
          </div>
        </div>

        <div className="text-right">
          <Text variant="micro" weight="semibold" className="opacity-80 mb-1 block" style={{ color: textColor }}>
            VALID THRU
          </Text>
          <Text variant="body-small" weight="semibold" className="font-mono" style={{ color: textColor }}>
            {validThru}
          </Text>
          <div className="mt-2 flex items-center gap-1.5 bg-white/20 px-2 py-1 rounded-lg justify-end">
            <StatusIndicator status="active" size="sm" />
            <Text variant="micro" weight="semibold" style={{ color: textColor }}>
              {status}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
