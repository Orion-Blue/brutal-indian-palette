import React, { useState } from 'react';
import { ArrowLeft, Search, ChevronRight } from 'lucide-react';
import BottomNav from '@/components/BottomNav';
import { Text } from '@/components/atoms/Text';
import { Avatar } from '@/components/atoms/Avatar';
import { IconButton } from '@/components/atoms/IconButton';
import { Header } from '@/components/organisms/Header';
import { SearchBar } from '@/components/molecules/SearchBar';
import { cn } from '@/lib/utils';

export default function SendMoneyScreen() {
  const [selectedContact, setSelectedContact] = useState<any>(null);
  const [amount, setAmount] = useState('');
  const [showAmountScreen, setShowAmountScreen] = useState(false);

  const frequentContacts = [
    { id: 1, name: 'Priya', initial: 'P', color: 'hsl(340, 82%, 70%)', lastAmount: '₹1,200' },
    { id: 2, name: 'Amit', initial: 'A', color: 'hsl(217, 91%, 60%)', lastAmount: '₹850' },
    { id: 3, name: 'Neha', initial: 'N', color: 'hsl(258, 90%, 66%)', lastAmount: '₹2,500' },
    { id: 4, name: 'Rahul', initial: 'R', color: 'hsl(25, 95%, 53%)', lastAmount: '₹675' },
    { id: 9, name: 'Kavya', initial: 'K', color: 'hsl(142, 71%, 45%)', lastAmount: '₹3,200' },
    { id: 10, name: 'Vijay', initial: 'V', color: 'hsl(45, 93%, 58%)', lastAmount: '₹1,800' },
    { id: 11, name: 'Sana', initial: 'S', color: 'hsl(280, 85%, 65%)', lastAmount: '₹950' },
    { id: 12, name: 'Rohan', initial: 'R', color: 'hsl(200, 95%, 55%)', lastAmount: '₹2,100' }
  ];

  const recentRecipients = [
    { id: 5, name: 'Swiggy', initial: 'S', color: 'hsl(6, 93%, 71%)', lastAmount: '₹340', time: 'Yesterday' },
    { id: 6, name: 'Amazon Pay', initial: 'A', color: 'hsl(258, 90%, 66%)', lastAmount: '₹1,245', time: '2 days ago' },
    { id: 7, name: 'Deepak Kumar', initial: 'D', color: 'hsl(142, 71%, 45%)', lastAmount: '₹5,000', time: '3 days ago' },
    { id: 8, name: 'PhonePe', initial: 'P', color: 'hsl(217, 91%, 60%)', lastAmount: '₹599', time: '1 week ago' },
    { id: 13, name: 'Zomato', initial: 'Z', color: 'hsl(0, 100%, 65%)', lastAmount: '₹750', time: '1 week ago' },
    { id: 14, name: 'Google Pay', initial: 'G', color: 'hsl(142, 71%, 45%)', lastAmount: '₹2,300', time: '2 weeks ago' },
    { id: 15, name: 'Meera Singh', initial: 'M', color: 'hsl(340, 82%, 70%)', lastAmount: '₹1,500', time: '2 weeks ago' },
    { id: 16, name: 'Uber', initial: 'U', color: 'hsl(0, 0%, 10%)', lastAmount: '₹425', time: '3 weeks ago' }
  ];

  const handleContactSelect = (contact: any) => {
    setSelectedContact(contact);
    setShowAmountScreen(true);
  };

  const handleBack = () => {
    setShowAmountScreen(false);
    setSelectedContact(null);
    setAmount('');
  };

  const handleNumberPad = (value: string) => {
    if (value === 'clear') {
      setAmount('');
    } else if (value === 'backspace') {
      setAmount(amount.slice(0, -1));
    } else {
      setAmount(amount + value);
    }
  };

  if (showAmountScreen && selectedContact) {
    return (
      <div className="min-h-screen bg-background text-foreground w-full max-w-md mx-auto pb-28">
        {/* Header with Back */}
        <div className="px-5 py-4 flex items-center gap-4">
          <IconButton
            icon={ArrowLeft}
            variant="ghost"
            size="md"
            onClick={handleBack}
          />
          <Text variant="h2" weight="bold" className="text-foreground">
            Send Money
          </Text>
        </div>

        {/* Recipient Card */}
        <div className="px-5 pb-8">
          <div className="bg-card/80 backdrop-blur-nav rounded-3xl p-8 flex flex-col items-center gap-4 shadow-card border border-border/30">
            <Avatar
              initial={selectedContact.initial}
              color={selectedContact.color}
              size="xl"
            />
            <div className="text-center">
              <Text variant="h2" weight="bold" className="text-foreground block mb-1">
                {selectedContact.name}
              </Text>
              <Text variant="body-small" className="text-muted-foreground">
                Last sent {selectedContact.lastAmount}
              </Text>
            </div>
          </div>
        </div>

        {/* Amount Input */}
        <div className="px-5 pb-6">
          <div className="text-center mb-6">
            <Text variant="caption" weight="semibold" className="text-muted-foreground block mb-3 uppercase tracking-wide">
              Enter Amount
            </Text>
            <div className="min-h-[64px] flex items-center justify-center">
              <Text variant="display" weight="bold" className="text-foreground">
                ₹{amount || '0'}
              </Text>
            </div>
          </div>

          {/* Quick Amount Buttons */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            {['100', '500', '1000', '2000'].map((quickAmount) => (
              <button
                key={quickAmount}
                onClick={() => setAmount(quickAmount)}
                className="bg-card/80 backdrop-blur-nav border border-border/30 rounded-2xl py-4 font-semibold text-sm cursor-pointer transition-all active:scale-[0.98] shadow-sm hover:shadow-md hover:bg-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                ₹{quickAmount}
              </button>
            ))}
          </div>

          {/* Number Pad */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'clear', '0', 'backspace'].map((key) => (
              <button
                key={key}
                onClick={() => handleNumberPad(key)}
                className="bg-card/80 backdrop-blur-nav border border-border/30 rounded-2xl h-16 flex items-center justify-center text-xl font-semibold cursor-pointer transition-all active:scale-[0.98] shadow-sm hover:shadow-md hover:bg-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {key === 'clear' ? 'C' : key === 'backspace' ? '←' : key}
              </button>
            ))}
          </div>

          {/* Send Button */}
          <button
            disabled={!amount || amount === '0'}
            className={cn(
              "w-full bg-primary text-primary-foreground rounded-2xl p-5 text-lg font-bold tracking-wide cursor-pointer transition-all shadow-md",
              "disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]",
              "hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            )}
          >
            SEND ₹{amount || '0'}
          </button>
        </div>

        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground w-full max-w-md mx-auto pb-28">
      {/* Header */}
      <div className="px-5 py-4 flex justify-between items-center">
        <Text variant="h2" weight="bold" className="text-foreground">
          Send Money
        </Text>
        <button className="bg-card/80 backdrop-blur-nav border border-border/30 rounded-xl px-5 h-12 flex items-center justify-center cursor-pointer shadow-sm transition-all active:scale-[0.98] hover:shadow-md hover:bg-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary text-sm font-semibold">
          UPI ID
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-5 pb-7">
        <div className="bg-card/80 backdrop-blur-nav border border-border/30 rounded-2xl px-5 flex items-center gap-3 shadow-sm min-h-[56px]">
          <Search size={20} className="text-muted-foreground" strokeWidth={2} />
          <input
            type="text"
            placeholder="Search by name, number or UPI ID"
            className="flex-1 bg-transparent border-none outline-none text-sm font-medium placeholder-muted-foreground text-foreground"
          />
        </div>
      </div>

      {/* Frequent Contacts */}
      <div className="px-5 pb-8">
        <Text variant="caption" weight="bold" className="text-muted-foreground block mb-5 uppercase tracking-wide">
          Frequent Contacts
        </Text>
        <div className="grid grid-cols-4 gap-3">
          {frequentContacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => handleContactSelect(contact)}
              className="flex flex-col items-center gap-2 cursor-pointer transition-transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
            >
              <Avatar
                initial={contact.initial}
                color={contact.color}
                size="md"
              />
              <Text variant="body-small" weight="semibold" className="text-foreground truncate w-full text-center">
                {contact.name}
              </Text>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Recipients */}
      <div className="px-5">
        <Text variant="caption" weight="bold" className="text-muted-foreground block mb-5 uppercase tracking-wide">
          Recent Recipients
        </Text>
        <div className="flex flex-col gap-3">
          {recentRecipients.map((recipient) => (
            <button
              key={recipient.id}
              onClick={() => handleContactSelect(recipient)}
              className="bg-card/80 backdrop-blur-nav border border-border/30 rounded-2xl p-5 flex items-center gap-4 cursor-pointer transition-all active:scale-[0.98] shadow-sm hover:shadow-md hover:bg-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Avatar
                initial={recipient.initial}
                color={recipient.color}
                size="md"
                className="flex-shrink-0"
              />
              <div className="flex-1 text-left min-w-0">
                <Text variant="body" weight="bold" className="text-foreground block mb-1 truncate">
                  {recipient.name}
                </Text>
                <Text variant="body-small" className="text-muted-foreground">
                  {recipient.time}
                </Text>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <Text variant="body" weight="bold" className="text-foreground">
                  {recipient.lastAmount}
                </Text>
                <ChevronRight size={20} className="text-muted-foreground" strokeWidth={2} />
              </div>
            </button>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
