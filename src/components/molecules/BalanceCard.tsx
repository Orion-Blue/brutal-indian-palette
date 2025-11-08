import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
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
  backgroundColor: string;
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
  backgroundColor,
  textColor = '#FFFFFF',
  className,
}: BalanceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
      }}
      className={cn(
        'rounded-3xl p-7 min-w-[280px] shadow-card relative overflow-hidden',
        className
      )}
    >
      {/* Subtle blur overlay for depth */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm pointer-events-none" />
      
      <div className="relative z-10">
        <div className="mb-8 flex items-start justify-between">
          <div className="flex-1">
            <Text variant="caption" weight="semibold" className="opacity-80 mb-2 block" style={{ color: textColor }}>
              {label}
            </Text>
            <Text variant="display" weight="bold" style={{ color: textColor }}>
              {isVisible ? `₹${balance.toLocaleString()}` : '₹ ••••••'}
            </Text>
          </div>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors active:scale-95"
            aria-label={isVisible ? "Hide balance" : "Show balance"}
          >
            {isVisible ? (
              <EyeOff size={20} color={textColor} strokeWidth={2} />
            ) : (
              <Eye size={20} color={textColor} strokeWidth={2} />
            )}
          </button>
        </div>

        <div className="flex justify-between items-end">
          <div>
            <Text variant="micro" weight="semibold" className="opacity-70 mb-1 block" style={{ color: textColor }}>
              ACCOUNT NUMBER
            </Text>
            <Text variant="body-small" weight="semibold" className="font-mono" style={{ color: textColor }}>
              {accountNumber}
            </Text>
            <div className="mt-3">
              <Text variant="micro" weight="semibold" className="opacity-70" style={{ color: textColor }}>
                {type}
              </Text>
            </div>
          </div>

          <div className="text-right">
            <Text variant="micro" weight="semibold" className="opacity-70 mb-1 block" style={{ color: textColor }}>
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
    </div>
  );
};
