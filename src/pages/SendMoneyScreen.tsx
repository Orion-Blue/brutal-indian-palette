import React, { useState } from 'react';
import { ArrowLeft, Search, ChevronRight } from 'lucide-react';
import BottomNav from '@/components/BottomNav';

export default function PaytmSendMoney() {
  const [selectedContact, setSelectedContact] = useState<any>(null);
  const [amount, setAmount] = useState('');
  const [showAmountScreen, setShowAmountScreen] = useState(false);

  const frequentContacts = [
    { id: 1, name: 'Priya', initial: 'P', color: '#B8860B', lastAmount: '₹1,200' },
    { id: 2, name: 'Amit', initial: 'A', color: '#DAA520', lastAmount: '₹850' },
    { id: 3, name: 'Neha', initial: 'N', color: '#B8860B', lastAmount: '₹2,500' },
    { id: 4, name: 'Rahul', initial: 'R', color: '#DAA520', lastAmount: '₹675' }
  ];

  const recentRecipients = [
    { id: 5, name: 'Swiggy', initial: 'S', color: '#B8860B', lastAmount: '₹340', time: 'Yesterday' },
    { id: 6, name: 'Amazon Pay', initial: 'A', color: '#DAA520', lastAmount: '₹1,245', time: '2 days ago' },
    { id: 7, name: 'Deepak Kumar', initial: 'D', color: '#B8860B', lastAmount: '₹5,000', time: '3 days ago' },
    { id: 8, name: 'PhonePe', initial: 'P', color: '#DAA520', lastAmount: '₹599', time: '1 week ago' }
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
        <div className="px-4 sm:px-5 pt-4 pb-6 flex items-center gap-4 h-[92px]">
          <button 
            onClick={handleBack}
            className="bg-white border-[3px] border-[#2D3561] rounded-xl w-12 sm:w-[52px] h-12 sm:h-[52px] flex items-center justify-center cursor-pointer shadow-[4px_4px_0px_#2D3561] transition-transform active:scale-95"
          >
            <ArrowLeft size={28} color="#1A1A1A" strokeWidth={2.5} />
          </button>
          <h1 className="text-2xl sm:text-[26px] font-extrabold m-0 tracking-tight flex-1">
            Send Money
          </h1>
        </div>

        {/* Recipient Card */}
        <div className="px-4 sm:px-5 pb-8">
          <div className="bg-white border-[3px] border-[#2D3561] rounded-3xl p-6 sm:p-8 flex flex-col items-center gap-4 shadow-[6px_6px_0px_rgba(45,53,97,0.4)]">
            <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-full flex items-center justify-center text-3xl sm:text-4xl font-extrabold text-white border-4 border-[#2D3561] shadow-[6px_6px_0px_#2D3561]"
              style={{ backgroundColor: selectedContact.color }}
            >
              {selectedContact.initial}
            </div>
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-extrabold m-0 mb-1 tracking-tight">
                {selectedContact.name}
              </h2>
              <p className="text-sm text-[#808080] m-0 font-semibold">
                Last sent {selectedContact.lastAmount}
              </p>
            </div>
          </div>
        </div>

        {/* Amount Input */}
        <div className="px-4 sm:px-5 pb-6">
          <div className="text-center mb-6">
            <div className="text-sm font-bold text-[#808080] mb-3 tracking-wide uppercase">
              Enter Amount
            </div>
            <div className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#1A1A1A] min-h-[64px] flex items-center justify-center">
              ₹{amount || '0'}
            </div>
          </div>

          {/* Quick Amount Buttons */}
          <div className="grid grid-cols-4 gap-2 sm:gap-2.5 mb-6">
            {['100', '500', '1000', '2000'].map((quickAmount) => (
              <button
                key={quickAmount}
                onClick={() => setAmount(quickAmount)}
                className="bg-white border-[3px] border-[#2D3561] rounded-2xl py-3 sm:py-4 font-bold text-sm sm:text-base cursor-pointer transition-transform active:scale-95 shadow-[4px_4px_0px_#2D3561]"
              >
                ₹{quickAmount}
              </button>
            ))}
          </div>

          {/* Number Pad */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-6">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'clear', '0', 'backspace'].map((key) => (
              <button
                key={key}
                onClick={() => handleNumberPad(key)}
                className="bg-white border-[3px] border-[#2D3561] rounded-2xl h-14 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold cursor-pointer transition-transform active:scale-95 shadow-[4px_4px_0px_#2D3561]"
              >
                {key === 'clear' ? 'C' : key === 'backspace' ? '←' : key}
              </button>
            ))}
          </div>

          {/* Send Button */}
          <button
            disabled={!amount || amount === '0'}
            className="w-full bg-[#B8860B] border-[3px] border-[#2D3561] rounded-[20px] p-5 text-xl font-extrabold text-white tracking-wide cursor-pointer transition-all shadow-[6px_6px_0px_#2D3561] disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
          >
            SEND ₹{amount || '0'}
          </button>
        </div>

        <BottomNav />
      </div>
    );
  }

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
      <div className="px-4 sm:px-5 pt-4 pb-6 flex justify-between items-center h-[92px]">
        <h1 className="text-2xl sm:text-[26px] font-extrabold m-0 tracking-tight">
          Send Money
        </h1>
        <button className="bg-white border-[3px] border-[#2D3561] rounded-xl px-4 sm:px-5 h-12 sm:h-[52px] flex items-center justify-center cursor-pointer shadow-[4px_4px_0px_#2D3561] transition-transform active:scale-95 text-sm sm:text-base font-bold">
          UPI ID
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-4 sm:px-5 pb-7">
        <div className="bg-white border-[3px] border-[#2D3561] rounded-2xl px-4 sm:px-5 flex items-center gap-3 shadow-[4px_4px_0px_rgba(45,53,97,0.4)] min-h-[56px] sm:min-h-[60px]">
          <Search size={24} color="#808080" strokeWidth={2.5} />
          <input
            type="text"
            placeholder="Search by name, number or UPI ID"
            className="flex-1 bg-transparent border-none outline-none text-sm sm:text-base font-semibold placeholder-[#B0B0B0]"
          />
        </div>
      </div>

      {/* Frequent Contacts */}
      <div className="px-4 sm:px-5 pb-8">
        <h2 className="text-sm font-extrabold mb-5 text-[#808080] tracking-[1.2px]">
          FREQUENT CONTACTS
        </h2>
        <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
          {frequentContacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => handleContactSelect(contact)}
              className="flex flex-col items-center gap-2 cursor-pointer transition-transform active:scale-95"
            >
              <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl font-extrabold text-white border-[3px] border-[#2D3561] shadow-[4px_4px_0px_#2D3561]"
                style={{ backgroundColor: contact.color }}
              >
                {contact.initial}
              </div>
              <span className="text-xs sm:text-sm font-bold truncate w-full text-center">
                {contact.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Recipients */}
      <div className="px-4 sm:px-5">
        <h2 className="text-sm font-extrabold mb-5 text-[#808080] tracking-[1.2px]">
          RECENT RECIPIENTS
        </h2>
        <div className="flex flex-col gap-3">
          {recentRecipients.map((recipient) => (
            <button
              key={recipient.id}
              onClick={() => handleContactSelect(recipient)}
              className="bg-white border-[3px] border-[#2D3561] rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 cursor-pointer transition-transform active:scale-95 shadow-[6px_6px_0px_#2D3561] min-h-[76px] sm:min-h-[84px]"
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl font-extrabold text-white border-[3px] border-[#2D3561] shadow-[3px_3px_0px_rgba(45,53,97,0.4)] flex-shrink-0"
                style={{ backgroundColor: recipient.color }}
              >
                {recipient.initial}
              </div>
              <div className="flex-1 text-left min-w-0">
                <h3 className="text-sm sm:text-base font-extrabold m-0 mb-1 tracking-tight truncate">
                  {recipient.name}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#808080] m-0 font-semibold">
                  {recipient.time}
                </p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <div className="text-sm sm:text-base font-extrabold text-[#1A1A1A]">
                  {recipient.lastAmount}
                </div>
                <ChevronRight size={24} color="#808080" strokeWidth={2.5} />
              </div>
            </button>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
