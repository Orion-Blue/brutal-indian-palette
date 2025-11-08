import { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Text } from '../atoms/Text';
import { IconButton } from '../atoms/IconButton';
import { cn } from '@/lib/utils';

interface HeaderProps {
  title: string;
  subtitle?: string;
  rightAction?: ReactNode;
  showBack?: boolean;
  className?: string;
}

export const Header = ({ title, subtitle, rightAction, showBack = false, className }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className={cn('bg-background px-5 py-4 flex items-center justify-between', className)}>
      <div className="flex items-center gap-3">
        {showBack && (
          <IconButton
            icon={ArrowLeft}
            variant="ghost"
            size="md"
            onClick={() => navigate(-1)}
          />
        )}
        <div>
          <Text variant="h2" weight="bold" className="text-foreground block">
            {title}
          </Text>
          {subtitle && (
            <Text variant="caption" className="text-muted-foreground block mt-0.5">
              {subtitle}
            </Text>
          )}
        </div>
      </div>
      {rightAction && <div>{rightAction}</div>}
    </header>
  );
};
