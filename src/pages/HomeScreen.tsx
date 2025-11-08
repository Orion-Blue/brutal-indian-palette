import React, { useState, useEffect } from 'react';
import { Home, Bell, Scan, Send, Download, Utensils, Car, ShoppingBag, Smartphone, TrendingUp } from 'lucide-react';
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
    { icon: Scan, label: 'SCAN', color: '#FF6B35' },
    { icon: Send, label: 'PAY', color: '#6C63FF' },
    { icon: Download, label: 'RECEIVE', color: '#00D9C0' }
  ];

  const User = ({ size, color, strokeWidth }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: '#FF6B35',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3px solid #2D3561',
            boxShadow: '3px 3px 0px #2D3561'
          }}>
            <Home size={20} color="#FFFFFF" strokeWidth={2.5} />
          </div>
          <h1 style={{ 
            fontSize: '18px', 
            fontWeight: '800', 
            margin: 0,
            letterSpacing: '0.5px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            textTransform: 'uppercase',
            color: '#1A1A1A'
          }}>RAJESH KUMAR</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button style={{
            background: '#FFFFFF',
            border: '3px solid #2D3561',
            borderRadius: '12px',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            position: 'relative',
            boxShadow: '4px 4px 0px #2D3561',
            transition: 'transform 0.2s',
            flexShrink: 0
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Bell size={22} color="#1A1A1A" strokeWidth={2.5} />
            <span style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              width: '12px',
              height: '12px',
              background: '#FF6B35',
              borderRadius: '50%',
              border: '2px solid #FFFFFF',
              boxShadow: '0 0 0 2px #2D3561'
            }}></span>
          </button>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FF6B35, #6C63FF)',
            border: '3px solid #2D3561',
            boxShadow: '4px 4px 0px #2D3561',
            flexShrink: 0
          }}></div>
        </div>
      </div>

      {/* Balance Cards - Horizontal Scroll */}
      <div style={{ 
        padding: '0 20px 28px',
        overflowX: 'auto',
        display: 'flex',
        gap: '16px',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        {balanceCards.map((card, index) => (
          <div
            key={index}
            style={{
              background: card.gradient,
              borderRadius: '20px',
              padding: '28px',
              minWidth: '300px',
              color: card.textColor,
              flexShrink: 0,
              border: '3px solid #2D3561',
              boxShadow: index === activeCard ? '8px 8px 0px #2D3561' : '6px 6px 0px rgba(45, 53, 97, 0.5)',
              transform: index === activeCard ? 'scale(1.02) translateY(-4px)' : 'scale(0.96)',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              cursor: 'pointer',
              minHeight: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            onClick={() => setActiveCard(index)}
          >
            <div>
              <p style={{ 
                fontSize: '12px', 
                fontWeight: '800',
                letterSpacing: '1.5px',
                opacity: 0.9,
                margin: '0 0 16px 0',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>{card.label}</p>
              <h2 style={{ 
                fontSize: '48px', 
                fontWeight: '800',
                margin: 0,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                letterSpacing: '-2.5px',
                lineHeight: '1'
              }}>
                ₹{index === 0 ? balance.toLocaleString('en-IN') : card.balance.toLocaleString('en-IN')}
                <span style={{ fontSize: '28px', opacity: 0.85 }}>.00</span>
              </h2>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              fontSize: '12px',
              fontFamily: "'Courier New', monospace",
              fontWeight: '700',
              opacity: 0.9,
              marginBottom: '12px',
              gap: '8px'
            }}>
              <span>{card.accountNumber}</span>
              <span>{card.type}</span>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              fontSize: '11px',
              fontFamily: "'Courier New', monospace",
              fontWeight: '700',
              opacity: 0.9,
              alignItems: 'flex-end'
            }}>
              <span>VALID THRU<br/>{card.validThru}</span>
              <span style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px',
                background: 'rgba(255,255,255,0.25)',
                padding: '6px 10px',
                borderRadius: '8px',
                border: '2px solid rgba(255,255,255,0.3)'
              }}>
                <span style={{ 
                  width: '8px', 
                  height: '8px', 
                  background: '#00FF00', 
                  borderRadius: '50%',
                  boxShadow: '0 0 8px #00FF00'
                }}></span>
                {card.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div style={{ padding: '0 20px 28px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '12px',
          background: '#FFFFFF',
          padding: '20px',
          borderRadius: '20px',
          border: '3px solid #2D3561',
          boxShadow: '6px 6px 0px rgba(45, 53, 97, 0.4)'
        }}>
          {quickActions.map((action, index) => (
            <button
              key={index}
              style={{
                background: '#FFF5E0',
                border: '3px solid #2D3561',
                borderRadius: '16px',
                padding: '24px 16px',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '5px 5px 0px #2D3561',
                minHeight: '120px',
                justifyContent: 'center'
              }}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{
                width: '56px',
                height: '56px',
                background: action.color,
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '3px solid #2D3561',
                boxShadow: '3px 3px 0px rgba(45, 53, 97, 0.5)'
              }}>
                <action.icon size={28} color="#FFFFFF" strokeWidth={2.5} />
              </div>
              <span style={{ 
                color: '#1A1A1A', 
                fontSize: '12px', 
                fontWeight: '800',
                letterSpacing: '1px',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Payments */}
      <div style={{ padding: '0 20px' }}>
        <h2 style={{ 
          fontSize: '22px', 
          fontWeight: '800',
          margin: '0 0 24px 0',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: '#1A1A1A',
          letterSpacing: '-0.5px'
        }}>Recent Payments</h2>

        {transactionsByDate.map((dateGroup, groupIndex) => (
          <div key={groupIndex} style={{ marginBottom: '28px' }}>
            <div style={{ 
              fontSize: '13px', 
              color: '#808080',
              fontWeight: '800',
              marginBottom: '16px',
              letterSpacing: '1.2px',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>{dateGroup.date}</div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {dateGroup.transactions.map((txn) => (
                <div
                  key={txn.id}
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
                    borderRadius: txn.isUser ? '50%' : '14px',
                    background: txn.isUser ? 'linear-gradient(135deg, #FF6B9D, #6C63FF)' : `${txn.bgColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '3px solid #2D3561',
                    boxShadow: '3px 3px 0px rgba(45, 53, 97, 0.4)'
                  }}>
                    <txn.icon size={24} color="#FFFFFF" strokeWidth={2.5} />
                  </div>
                  
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ 
                      fontSize: '16px', 
                      fontWeight: '800',
                      margin: '0 0 6px 0',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      letterSpacing: '0.3px',
                      color: '#1A1A1A'
                    }}>{txn.name}</h3>
                    <p style={{ 
                      fontSize: '13px', 
                      color: '#808080',
                      margin: 0,
                      fontFamily: "'Courier New', monospace",
                      fontWeight: '600'
                    }}>
                      {txn.time} • <span style={{
                        color: txn.status === 'PENDING' ? '#FFD93D' : '#00C896',
                        fontWeight: '700'
                      }}>{txn.status}</span>
                    </p>
                  </div>
                  
                  <div style={{ 
                    fontSize: '18px', 
                    fontWeight: '800',
                    color: txn.type === 'credit' ? '#00D9C0' : '#FF6B35',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    letterSpacing: '-0.5px',
                    whiteSpace: 'nowrap'
                  }}>
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