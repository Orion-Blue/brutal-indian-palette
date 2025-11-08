import React, { useState } from 'react';
import { ArrowLeft, Search, ChevronRight } from 'lucide-react';
import BottomNav from '@/components/BottomNav';

export default function PaytmSendMoney() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [amount, setAmount] = useState('');
  const [showAmountScreen, setShowAmountScreen] = useState(false);

  const frequentContacts = [
    { id: 1, name: 'Priya', initial: 'P', color: '#FF6B35', phone: '9876543210' },
    { id: 2, name: 'Amit', initial: 'A', color: '#6C63FF', phone: '9876543211' },
    { id: 3, name: 'Sneha', initial: 'S', color: '#00D9C0', phone: '9876543212' },
    { id: 4, name: 'Rahul', initial: 'R', color: '#FF6B9D', phone: '9876543213' },
    { id: 5, name: 'Kavya', initial: 'K', color: '#FFD93D', phone: '9876543214' }
  ];

  const recentRecipients = [
    { id: 1, name: 'Priya Sharma', phone: '9876543210', upi: 'priya@paytm', lastAmount: '₹500', initial: 'P', color: '#FF6B35' },
    { id: 2, name: 'Amit Kumar', phone: '9876543211', upi: 'amit@okicici', lastAmount: '₹1,200', initial: 'A', color: '#6C63FF' },
    { id: 3, name: 'Sneha Patel', phone: '9876543212', upi: 'sneha@ybl', lastAmount: '₹850', initial: 'S', color: '#00D9C0' },
    { id: 4, name: 'Rahul Verma', phone: '9876543213', upi: 'rahul@paytm', lastAmount: '₹2,000', initial: 'R', color: '#FF6B9D' },
    { id: 5, name: 'Kavya Singh', phone: '9876543214', upi: 'kavya@upi', lastAmount: '₹650', initial: 'K', color: '#FFD93D' }
  ];

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    setShowAmountScreen(true);
  };

  const handleBack = () => {
    if (showAmountScreen) {
      setShowAmountScreen(false);
      setSelectedContact(null);
      setAmount('');
    }
  };

  const handleAmountInput = (value) => {
    setAmount(value);
  };

  const quickAmounts = ['100', '500', '1000', '2000'];

  if (showAmountScreen && selectedContact) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#FFF5E0',
        color: '#1A1A1A',
        fontFamily: "'Inter', sans-serif",
        maxWidth: '428px',
        margin: '0 auto',
        paddingBottom: '80px'
      }}>
        
        {/* Status Bar */}
        <div style={{ 
          padding: '14px 20px 10px', 
          display: 'flex', 
          justifyContent: 'space-between',
          fontSize: '15px',
          fontWeight: '600',
          color: '#1A1A1A',
          height: '44px',
          alignItems: 'center'
        }}>
          <span>9:41</span>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <span>📶</span>
            <span>📡</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Header */}
        <div style={{ padding: '16px 20px 24px', display: 'flex', alignItems: 'center', gap: '16px', height: '92px' }}>
          <button 
            onClick={handleBack}
            style={{
              background: '#FFFFFF',
              border: '3px solid #2D3561',
              borderRadius: '12px',
              width: '52px',
              height: '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '4px 4px 0px #2D3561',
              transition: 'transform 0.2s',
              flexShrink: 0
            }}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <ArrowLeft size={24} color="#1A1A1A" strokeWidth={2.5} />
          </button>
          <h1 style={{ 
            fontSize: '26px', 
            fontWeight: '800',
            margin: 0,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: '#1A1A1A',
            letterSpacing: '-0.5px'
          }}>Enter Amount</h1>
        </div>

        {/* Recipient Info */}
        <div style={{
          padding: '0 20px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}>
          <div style={{
            width: '96px',
            height: '96px',
            borderRadius: '50%',
            background: selectedContact.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '40px',
            fontWeight: '800',
            color: '#FFFFFF',
            border: '4px solid #2D3561',
            boxShadow: '6px 6px 0px #2D3561',
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}>
            {selectedContact.initial}
          </div>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ 
              fontSize: '22px', 
              fontWeight: '800',
              margin: '0 0 8px 0',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: '#1A1A1A',
              letterSpacing: '-0.5px'
            }}>{selectedContact.name}</h2>
            <p style={{ 
              fontSize: '15px', 
              color: '#808080',
              margin: 0,
              fontFamily: "'Courier New', monospace",
              fontWeight: '600'
            }}>{selectedContact.phone}</p>
          </div>
        </div>

        {/* Amount Input */}
        <div style={{
          padding: '0 20px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '13px',
            color: '#808080',
            marginBottom: '20px',
            letterSpacing: '1.5px',
            fontWeight: '800',
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}>ENTER AMOUNT</div>
          <div style={{
            fontSize: '72px',
            fontWeight: '800',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: '#00D9C0',
            letterSpacing: '-3px',
            minHeight: '90px',
            display: 'flex',
            alignItems: 'center',
            textShadow: '0 0 40px rgba(0, 217, 192, 0.3)',
            lineHeight: '1'
          }}>
            ₹{amount || '0'}
          </div>
        </div>

        {/* Quick Amount Buttons */}
        <div style={{ padding: '0 20px 32px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '12px'
          }}>
            {quickAmounts.map((amt) => (
              <button
                key={amt}
                onClick={() => handleAmountInput(amt)}
                style={{
                  background: '#FFFFFF',
                  border: '3px solid #2D3561',
                  borderRadius: '12px',
                  padding: '18px 12px',
                  color: '#1A1A1A',
                  fontSize: '18px',
                  fontWeight: '800',
                  cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: 'transform 0.2s',
                  boxShadow: '5px 5px 0px #2D3561',
                  minHeight: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                ₹{amt}
              </button>
            ))}
          </div>
        </div>

        {/* Number Pad */}
        <div style={{ padding: '0 20px 28px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '12px'
          }}>
            {[1,2,3,4,5,6,7,8,9,'00',0,'⌫'].map((num) => (
              <button
                key={num}
                onClick={() => {
                  if (num === '⌫') {
                    setAmount(amount.slice(0, -1));
                  } else {
                    setAmount(amount + num);
                  }
                }}
                style={{
                  background: '#FFFFFF',
                  border: '3px solid #2D3561',
                  borderRadius: '12px',
                  padding: '20px',
                  color: '#1A1A1A',
                  fontSize: '28px',
                  fontWeight: '800',
                  cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: 'transform 0.2s',
                  boxShadow: '4px 4px 0px #2D3561',
                  minHeight: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Send Button */}
        <div style={{ padding: '0 20px' }}>
          <button
            disabled={!amount || amount === '0'}
            style={{
              width: '100%',
              background: amount && amount !== '0' ? 'linear-gradient(135deg, #00D9C0, #6C63FF)' : '#FFFFFF',
              border: '3px solid #2D3561',
              borderRadius: '16px',
              padding: '20px',
              color: amount && amount !== '0' ? '#FFFFFF' : '#B3B3B3',
              fontSize: '20px',
              fontWeight: '800',
              cursor: amount && amount !== '0' ? 'pointer' : 'not-allowed',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: '1px',
              opacity: amount && amount !== '0' ? 1 : 0.5,
              transition: 'all 0.2s',
              boxShadow: amount && amount !== '0' ? '6px 6px 0px #2D3561' : '3px 3px 0px rgba(45, 53, 97, 0.3)',
              minHeight: '68px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseDown={(e) => {
              if (amount && amount !== '0') {
                e.currentTarget.style.transform = 'scale(0.98)';
              }
            }}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            SEND ₹{amount || '0'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FFF5E0',
      color: '#1A1A1A',
      fontFamily: "'Inter', sans-serif",
      maxWidth: '428px',
      margin: '0 auto',
      paddingBottom: '100px'
    }}>
      
      {/* Status Bar */}
      <div style={{ 
        padding: '14px 20px 10px', 
        display: 'flex', 
        justifyContent: 'space-between',
        fontSize: '15px',
        fontWeight: '600',
        color: '#1A1A1A',
        height: '44px',
        alignItems: 'center'
      }}>
        <span>9:41</span>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <span>📶</span>
          <span>📡</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div style={{ padding: '16px 20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '92px' }}>
        <h1 style={{ 
          fontSize: '26px', 
          fontWeight: '800',
          margin: 0,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: '#1A1A1A',
          letterSpacing: '-0.5px'
        }}>Send Money</h1>
        <button style={{
          background: '#6C63FF',
          border: '3px solid #2D3561',
          borderRadius: '12px',
          padding: '12px 20px',
          color: '#FFFFFF',
          fontSize: '14px',
          fontWeight: '800',
          cursor: 'pointer',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          letterSpacing: '0.5px',
          boxShadow: '4px 4px 0px #2D3561',
          transition: 'transform 0.2s',
          minHeight: '48px',
          display: 'flex',
          alignItems: 'center'
        }}
        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          UPI ID
        </button>
      </div>

      {/* Search Bar */}
      <div style={{ padding: '0 20px 28px' }}>
        <div style={{
          background: '#FFFFFF',
          border: '3px solid #2D3561',
          borderRadius: '16px',
          padding: '18px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          boxShadow: '4px 4px 0px rgba(45, 53, 97, 0.4)',
          minHeight: '60px'
        }}>
          <Search size={24} color="#808080" strokeWidth={2.5} />
          <input
            type="text"
            placeholder="Search by name, number or UPI ID"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#1A1A1A',
              fontSize: '15px',
              width: '100%',
              fontFamily: "'Inter', sans-serif",
              fontWeight: '600'
            }}
          />
        </div>
      </div>

      {/* Frequent Contacts */}
      <div style={{ padding: '0 20px 32px' }}>
        <h2 style={{ 
          fontSize: '14px', 
          fontWeight: '800',
          margin: '0 0 20px 0',
          color: '#808080',
          letterSpacing: '1.2px',
          fontFamily: "'Plus Jakarta Sans', sans-serif"
        }}>FREQUENT CONTACTS</h2>
        <div style={{ 
          display: 'flex', 
          gap: '16px',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
          {frequentContacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => handleContactSelect(contact)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                minWidth: '80px',
                transition: 'transform 0.2s'
              }}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: contact.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                fontWeight: '800',
                color: '#FFFFFF',
                border: '3px solid #2D3561',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                boxShadow: '6px 6px 0px #2D3561'
              }}
            >
                {contact.initial}
              </div>
              <span style={{ 
                fontSize: '14px', 
                fontWeight: '700',
                color: '#1A1A1A',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>{contact.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Recipients */}
      <div style={{ padding: '0 20px' }}>
        <h2 style={{ 
          fontSize: '14px', 
          fontWeight: '800',
          margin: '0 0 20px 0',
          color: '#808080',
          letterSpacing: '1.2px',
          fontFamily: "'Plus Jakarta Sans', sans-serif"
        }}>RECENT RECIPIENTS</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
          {recentRecipients.map((recipient) => (
            <button
              key={recipient.id}
              onClick={() => handleContactSelect(recipient)}
              style={{
                background: '#FFFFFF',
                border: '3px solid #2D3561',
                borderRadius: '16px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                textAlign: 'left',
                boxShadow: '6px 6px 0px #2D3561',
                minHeight: '92px'
              }}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: recipient.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: '800',
                color: '#FFFFFF',
                flexShrink: 0,
                border: '3px solid #2D3561',
                boxShadow: '3px 3px 0px rgba(45, 53, 97, 0.4)',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                {recipient.initial}
              </div>
              
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ 
                  fontSize: '16px', 
                  fontWeight: '800',
                  margin: '0 0 6px 0',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  letterSpacing: '0.3px',
                  color: '#1A1A1A'
                }}>{recipient.name}</h3>
                <p style={{ 
                  fontSize: '13px', 
                  color: '#808080',
                  margin: 0,
                  fontFamily: "'Courier New', monospace",
                  fontWeight: '600'
                }}>{recipient.upi}</p>
              </div>
              
              <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ 
                  fontSize: '15px', 
                  fontWeight: '800',
                  color: '#1A1A1A',
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>{recipient.lastAmount}</div>
                <ChevronRight size={20} color="#808080" strokeWidth={2.5} />
              </div>
            </button>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}