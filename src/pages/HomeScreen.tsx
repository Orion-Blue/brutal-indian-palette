import { useState, useEffect } from 'react';
import { Scan, Send, ArrowDownToLine, Bell } from 'lucide-react';
import BottomNav from '@/components/BottomNav';
import { BalanceCard } from '@/components/molecules/BalanceCard';
import { QuickActionsGrid } from '@/components/organisms/QuickActionsGrid';
import { TransactionList } from '@/components/organisms/TransactionList';
import { Avatar } from '@/components/atoms/Avatar';
import { Text } from '@/components/atoms/Text';
import { IconButton } from '@/components/atoms/IconButton';

export default function HomeScreen() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    let current = 0;
    const target = 12450;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setBalance(target);
        clearInterval(timer);
      } else {
        setBalance(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, []);

  const quickActions = [
    { icon: Scan, label: 'Scan', color: 'hsl(48, 100%, 50%)' },
    { icon: Send, label: 'Pay', color: 'hsl(217, 91%, 60%)' },
    { icon: ArrowDownToLine, label: 'Receive', color: 'hsl(142, 71%, 45%)' }
  ];

  const transactions = [
    { id: '1', name: 'Swiggy', type: 'Payment', amount: '₹340', date: 'Today', initial: 'S', color: 'hsl(6, 93%, 71%)', isPositive: false },
    { id: '2', name: 'Priya Sharma', type: 'Received', amount: '₹1,000', date: 'Today', initial: 'P', color: 'hsl(340, 82%, 70%)', isPositive: true },
    { id: '3', name: 'Amazon', type: 'Payment', amount: '₹1,245', date: 'Yesterday', initial: 'A', color: 'hsl(258, 90%, 66%)', isPositive: false },
    { id: '4', name: 'Zomato', type: 'Payment', amount: '₹580', date: 'Yesterday', initial: 'Z', color: 'hsl(0, 84%, 60%)', isPositive: false },
    { id: '5', name: 'Salary Credit', type: 'Received', amount: '₹45,000', date: '2 days ago', initial: 'S', color: 'hsl(142, 71%, 45%)', isPositive: true },
    { id: '6', name: 'Netflix', type: 'Payment', amount: '₹649', date: '3 days ago', initial: 'N', color: 'hsl(0, 100%, 50%)', isPositive: false },
  ];

  return (
    <div className="min-h-screen bg-background w-full max-w-md mx-auto pb-28">
      {/* Header */}
      <div className="px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar initial="RK" color="hsl(48, 100%, 50%)" size="lg" />
          <div>
            <Text variant="h2" weight="bold" className="text-foreground block">
              Rajesh Kumar
            </Text>
            <Text variant="caption" className="text-muted-foreground">
              Good afternoon
            </Text>
          </div>
        </div>
        <IconButton icon={Bell} variant="default" size="md" />
      </div>

      {/* Balance Cards - Swipeable Stack */}
      <div className="px-5 py-4">
        <div className="relative">
          {/* Background cards to show stack effect */}
          <div className="absolute top-2 left-2 right-2 h-full bg-accent-purple/90 rounded-3xl shadow-md opacity-40 -z-10" />
          <div className="absolute top-4 left-4 right-4 h-full bg-accent-blue/90 rounded-3xl shadow-md opacity-60 -z-10" />
          
          {/* Main card */}
          <BalanceCard
            balance={balance}
            label="Total Balance"
            accountNumber="XXXX - 5689"
            type="VIRTUAL"
            validThru="07/29"
            status="ACTIVE"
            backgroundColor="hsl(48, 100%, 50%)"
            textColor="#141414"
          />
          
          {/* Swipe indicator dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-5 py-4">
        <QuickActionsGrid actions={quickActions} />
      </div>

      {/* Transactions */}
      <div className="px-5 py-4">
        <TransactionList 
          title="Recent Transactions" 
          transactions={transactions}
        />
      </div>

      {/* Spending Insights */}
      <div className="px-5 pb-7">
        <Text variant="caption" weight="bold" className="text-muted-foreground block mb-5 uppercase tracking-wide">
          This Month's Overview
        </Text>
        
        <div className="bg-card/80 backdrop-blur-nav border border-border/30 rounded-3xl p-6 shadow-card">
          {/* Total Spending */}
          <div className="mb-6">
            <Text variant="body-small" className="text-muted-foreground block mb-2">
              Total Spending
            </Text>
            <Text variant="h1" weight="bold" className="text-foreground block mb-1">
              ₹12,450
            </Text>
            <div className="flex items-center gap-2">
              <div className="bg-accent-green/15 rounded-full px-3 py-1">
                <Text variant="micro" weight="bold" className="text-accent-green">
                  ↓ 12% less than last month
                </Text>
              </div>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-blue/15 flex items-center justify-center">
                  <Text variant="body">🍔</Text>
                </div>
                <div>
                  <Text variant="body" weight="semibold" className="text-foreground block">
                    Food & Dining
                  </Text>
                  <Text variant="body-small" className="text-muted-foreground">
                    32% of budget
                  </Text>
                </div>
              </div>
              <Text variant="body" weight="bold" className="text-foreground">
                ₹3,980
              </Text>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-purple/15 flex items-center justify-center">
                  <Text variant="body">🛒</Text>
                </div>
                <div>
                  <Text variant="body" weight="semibold" className="text-foreground block">
                    Shopping
                  </Text>
                  <Text variant="body-small" className="text-muted-foreground">
                    28% of budget
                  </Text>
                </div>
              </div>
              <Text variant="body" weight="bold" className="text-foreground">
                ₹3,486
              </Text>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                  <Text variant="body">🚗</Text>
                </div>
                <div>
                  <Text variant="body" weight="semibold" className="text-foreground block">
                    Transport
                  </Text>
                  <Text variant="body-small" className="text-muted-foreground">
                    18% of budget
                  </Text>
                </div>
              </div>
              <Text variant="body" weight="bold" className="text-foreground">
                ₹2,241
              </Text>
            </div>
          </div>

          {/* Budget Progress */}
          <div className="mt-6 pt-5 border-t border-border/30">
            <div className="flex justify-between items-center mb-3">
              <Text variant="body-small" weight="semibold" className="text-muted-foreground">
                Monthly Budget
              </Text>
              <Text variant="body-small" weight="bold" className="text-foreground">
                ₹12,450 / ₹15,000
              </Text>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all"
                style={{ width: '83%' }}
              />
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
