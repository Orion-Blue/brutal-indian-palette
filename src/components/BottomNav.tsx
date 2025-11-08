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
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="max-w-md mx-auto flex items-center justify-around px-2 py-2">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={cn(
                'flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all active:scale-95',
                isActive ? 'bg-primary/10' : 'hover:bg-muted'
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
