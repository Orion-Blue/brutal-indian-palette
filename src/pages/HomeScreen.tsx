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

      {/* Balance Card */}
      <div className="px-5 py-4">
        <BalanceCard
          balance={balance}
          label="Total Balance"
          accountNumber="XXXX - 5689"
          type="VIRTUAL"
          validThru="07/29"
          status="ACTIVE"
          backgroundColor="hsl(48, 100%, 50%)"
        />
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

      <BottomNav />
    </div>
  );
}
