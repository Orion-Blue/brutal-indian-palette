import { Home, BarChart3, MessageSquare, User, Wallet } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Text } from './atoms/Text';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: Home, label: 'Home', path: '/home' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: Wallet, label: 'Wallet', path: '/wallet' },
  { icon: MessageSquare, label: 'Messages', path: '/messages' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-4 left-4 right-4 mx-auto max-w-md bg-card/80 backdrop-blur-nav border border-border/50 rounded-2xl z-50 shadow-xl">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={cn(
                'flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all active:scale-95',
                isActive ? 'bg-primary/10' : 'hover:bg-muted/50'
              )}
            >
              <Icon
                size={22}
                strokeWidth={2}
                className={cn(
                  'transition-colors',
                  isActive ? 'text-primary' : 'text-muted-foreground'
                )}
              />
              <Text
                variant="micro"
                weight="medium"
                className={cn(
                  'transition-colors',
                  isActive ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {label}
              </Text>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
