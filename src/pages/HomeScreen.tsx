import React, { useState, useEffect } from 'react';
import { Scan, Send, Download, Bell, Utensils, Car, ShoppingBag, Smartphone, TrendingUp, User } from 'lucide-react';
import BottomNav from '@/components/BottomNav';

export default function PaytmHomeDark() {
  const [activeCard, setActiveCard] = useState(0);
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

  const balanceCards = [
    {
      balance: balance,
      label: 'BALANCE',
      accountNumber: 'XXXX - 5689',
      type: 'VIRTUAL',
      validThru: '07/29',
      status: 'ACTIVE',
      gradient: 'linear-gradient(135deg, #6C63FF 0%, #00D9C0 100%)',
      textColor: '#FFFFFF'
    },
    {
      balance: 8430,
      label: 'BALANCE',
      accountNumber: 'XXXX - 7821',
      type: 'SAVINGS',
      validThru: '02/28',
      status: 'ACTIVE',
      gradient: 'linear-gradient(135deg, #FF6B35 0%, #FFD93D 100%)',
      textColor: '#FFFFFF'
    }
  ];

  const quickActions = [
    { icon: Scan, label: 'SCAN', color: '#B8860B' },
    { icon: Send, label: 'PAY', color: '#A9A9A9' },
    { icon: Download, label: 'RECEIVE', color: '#DAA520' }
  ];


  const transactionsByDate = [
    {
      date: '25 JUN',
      transactions: [
        { id: 1, name: 'SWIGGY', time: '9:32 PM', status: 'PENDING', amount: 340, type: 'debit', icon: Utensils, bgColor: '#FC8019' },
        { id: 2, name: 'PRIYA SHARMA', time: '7:50 PM', status: 'PENDING', amount: 1000, type: 'credit', icon: User, bgColor: '#FF6B9D', isUser: true },
        { id: 3, name: 'AMAZON INDIA', time: '4:32 PM', status: 'COMPLETED', amount: 1245, type: 'debit', icon: ShoppingBag, bgColor: '#FF9F40' }
      ]
    },
    {
      date: '24 JUN',
      transactions: [
        { id: 4, name: 'SALARY CREDITED', time: '4:56 PM', status: 'COMPLETED', amount: 45000, type: 'credit', icon: TrendingUp, bgColor: '#00C896' },
        { id: 5, name: 'UBER', time: '2:15 PM', status: 'COMPLETED', amount: 180, type: 'debit', icon: Car, bgColor: '#2D3561' },
        { id: 6, name: 'PHONEPE RECHARGE', time: '10:30 AM', status: 'COMPLETED', amount: 599, type: 'debit', icon: Smartphone, bgColor: '#6C63FF' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF5E0] text-[#1A1A1A] w-full max-w-[428px] mx-auto pb-[100px]">
      
      {/* Status Bar */}
      <div className="px-4 sm:px-5 pt-3.5 pb-2.5 flex justify-between text-[15px] font-semibold h-11 items-center">
        <span>9:41</span>
        <div className="flex gap-1.5 items-center">
          <span>📶</span>
          <span>📡</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="px-4 sm:px-5 pt-4 pb-6 flex justify-between items-center h-[92px] gap-3">
        <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gradient-to-br from-[#B8860B] to-[#DAA520] border-[3px] border-[#2D3561] shadow-[4px_4px_0px_#2D3561] flex-shrink-0 flex items-center justify-center text-lg sm:text-xl font-extrabold text-white">
          RK
        </div>
        
        <h1 className="text-base sm:text-lg font-extrabold m-0 tracking-tight flex-1 text-center">
          Rajesh Kumar
        </h1>
        
        <button className="bg-white border-[3px] border-[#2D3561] rounded-[14px] w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center cursor-pointer relative shadow-[4px_4px_0px_#2D3561] transition-transform active:scale-95 flex-shrink-0">
          <Bell size={28} color="#1A1A1A" strokeWidth={2.5} />
          <span className="absolute top-2 right-2 w-3.5 h-3.5 bg-[#FF6B35] rounded-full border-2 border-white shadow-[0_0_0_2px_#2D3561]"></span>
        </button>
      </div>

      {/* Balance Card */}
      <div className="px-4 sm:px-5 pb-7">
        <div className="bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-[20px] p-6 sm:p-7 border-[3px] border-[#2D3561] min-h-[200px] flex flex-col justify-between shadow-[8px_8px_0px_#2D3561] text-white">
          <div>
            <p className="text-xs font-extrabold tracking-[1.5px] opacity-90 m-0 mb-4">
              BALANCE
            </p>
            <h2 className="text-[42px] sm:text-5xl font-extrabold m-0 tracking-[-2.5px] leading-none">
              ₹{balance.toLocaleString('en-IN')}
              <span className="text-2xl sm:text-[28px] opacity-85">.00</span>
            </h2>
          </div>
          <div className="flex justify-between text-xs font-bold opacity-90 mb-3 gap-2">
            <span>XXXX - 5689</span>
            <span>VIRTUAL</span>
          </div>
          <div className="flex justify-between text-[11px] font-bold opacity-90 items-end">
            <span>VALID THRU<br/>07/29</span>
            <span className="flex items-center gap-1.5 bg-white/25 px-2.5 py-1.5 rounded-lg border-2 border-white/30">
              <span className="w-2 h-2 bg-[#00FF00] rounded-full shadow-[0_0_8px_#00FF00]"></span>
              ACTIVE
            </span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 sm:px-5 pb-7">
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="bg-white border-[3px] border-[#2D3561] rounded-2xl p-4 sm:p-6 cursor-pointer transition-transform active:scale-95 flex flex-col items-center gap-2.5 sm:gap-3 shadow-[6px_6px_0px_#2D3561] min-h-[110px] sm:min-h-[120px] justify-center"
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full flex items-center justify-center border-[3px] border-[#2D3561] shadow-[3px_3px_0px_rgba(45,53,97,0.5)]"
                style={{ background: action.color }}
              >
                <action.icon size={28} color="#FFFFFF" strokeWidth={2.5} />
              </div>
              <span className="text-[11px] sm:text-xs font-extrabold tracking-wide">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Payments */}
      <div className="px-4 sm:px-5">
        <h2 className="text-xl sm:text-[22px] font-extrabold m-0 mb-5 sm:mb-6 tracking-tight">
          Recent Payments
        </h2>

        {transactionsByDate.map((dateGroup, groupIndex) => (
          <div key={groupIndex} className="mb-7">
            <div className="text-xs sm:text-[13px] text-[#808080] font-extrabold mb-4 tracking-[1.2px]">
              {dateGroup.date}
            </div>
            
            <div className="flex flex-col gap-3">
              {dateGroup.transactions.map((txn) => (
                <div
                  key={txn.id}
                  className="bg-white border-[3px] border-[#2D3561] rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 cursor-pointer transition-transform active:scale-95 shadow-[6px_6px_0px_#2D3561] min-h-[88px] sm:min-h-[92px]"
                >
                  <div className="w-12 sm:w-14 h-12 sm:h-14 flex-shrink-0 border-[3px] border-[#2D3561] shadow-[3px_3px_0px_rgba(45,53,97,0.4)] flex items-center justify-center"
                    style={{
                      borderRadius: txn.isUser ? '50%' : '14px',
                      background: txn.isUser ? 'linear-gradient(135deg, #FF6B9D, #6C63FF)' : txn.bgColor,
                    }}
                  >
                    <txn.icon size={24} color="#FFFFFF" strokeWidth={2.5} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-extrabold m-0 mb-1.5 tracking-tight truncate">
                      {txn.name}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#808080] m-0 font-semibold">
                      {txn.time} • <span className="font-bold" style={{
                        color: txn.status === 'PENDING' ? '#FFD93D' : '#00C896'
                      }}>{txn.status}</span>
                    </p>
                  </div>
                  
                  <div className="text-base sm:text-lg font-extrabold tracking-tight whitespace-nowrap"
                    style={{ color: txn.type === 'credit' ? '#00D9C0' : '#FF6B35' }}
                  >
                    {txn.type === 'credit' ? '+' : '-'}₹{txn.amount.toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
