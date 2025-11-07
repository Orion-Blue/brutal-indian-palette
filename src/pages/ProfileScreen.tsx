import React, { useState } from 'react';
import { Settings, ChevronRight, Shield, CreditCard, Bell, Moon, Globe, HelpCircle, FileText, LogOut, User, CheckCircle } from 'lucide-react';
import BottomNav from '@/components/BottomNav';

export default function PaytmProfile() {
  const [darkMode, setDarkMode] = useState(true);

  const statsData = [
    { label: 'Total Received', value: '₹45,230', color: '#00D9C0', icon: '↓' },
    { label: 'Total Sent', value: '₹32,180', color: '#FF6B35', icon: '↑' },
    { label: 'Transactions', value: '127', color: '#FFD93D', icon: '#' },
    { label: 'This Month', value: '₹8,450', color: '#6C63FF', icon: '📊' }
  ];

  const menuItems = [
    {
      section: 'Account',
      items: [
        { icon: User, label: 'Personal Information', color: '#FF6B35', hasChevron: true },
        { icon: Shield, label: 'Security & Privacy', color: '#6C63FF', hasChevron: true },
        { icon: CreditCard, label: 'Payment Methods', color: '#00D9C0', badge: '3', hasChevron: true }
      ]
    },
    {
      section: 'Preferences',
      items: [
        { icon: Bell, label: 'Notifications', color: '#FF6B9D', hasChevron: true },
        { icon: Moon, label: 'Dark Mode', color: '#FFD93D', hasToggle: true, toggleValue: darkMode },
        { icon: Globe, label: 'Language', color: '#00C896', value: 'English', hasChevron: true }
      ]
    },
    {
      section: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help & Support', color: '#FF9F40', hasChevron: true },
        { icon: FileText, label: 'Terms & Privacy', color: '#808080', hasChevron: true }
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
        padding: '12px 20px 8px', 
        display: 'flex', 
        justifyContent: 'space-between',
        fontSize: '14px',
        fontWeight: '600',
        color: '#1A1A1A'
      }}>
        <span>9:41</span>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <span>📶</span>
          <span>📡</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ 
          fontSize: '26px', 
          fontWeight: '800',
          margin: 0,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: '#1A1A1A'
        }}>Profile</h1>
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
          boxShadow: '3px 3px 0px #2D3561',
          transition: 'all 0.2s'
        }}>
          <Settings size={22} color="#1A1A1A" strokeWidth={2.5} />
        </button>
      </div>

      {/* Profile Card */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF5E0 100%)',
          border: '3px solid #2D3561',
          borderRadius: '24px',
          padding: '36px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          boxShadow: '6px 6px 0px rgba(45, 53, 97, 0.4)'
        }}>
          {/* Avatar */}
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '104px',
              height: '104px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FF6B35, #6C63FF)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '44px',
              fontWeight: '800',
              color: '#FFFFFF',
              border: '4px solid #2D3561',
              boxShadow: '6px 6px 0px #2D3561',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              RK
            </div>
            <div style={{
              position: 'absolute',
              bottom: '2px',
              right: '2px',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#00D9C0',
              border: '3px solid #FFF5E0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '3px 3px 0px #2D3561'
            }}>
              <CheckCircle size={18} color="#FFFFFF" strokeWidth={3} />
            </div>
          </div>

          {/* Name & Details */}
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ 
              fontSize: '26px', 
              fontWeight: '800',
              margin: '0 0 6px 0',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: '#1A1A1A'
            }}>Rajesh Kumar</h2>
            <p style={{ 
              fontSize: '15px', 
              color: '#808080',
              margin: '0 0 12px 0',
              fontFamily: "'Courier New', monospace",
              fontWeight: '700'
            }}>+91 98765 43210</p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#00D9C0',
              border: '2px solid #2D3561',
              borderRadius: '12px',
              padding: '8px 16px',
              boxShadow: '3px 3px 0px #2D3561'
            }}>
              <CheckCircle size={16} color="#FFFFFF" strokeWidth={3} />
              <span style={{ 
                fontSize: '13px', 
                fontWeight: '800',
                color: '#FFFFFF',
                letterSpacing: '0.8px',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>KYC VERIFIED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div style={{ padding: '0 20px 32px' }}>
        <h2 style={{ 
          fontSize: '14px', 
          fontWeight: '800',
          margin: '0 0 16px 0',
          color: '#808080',
          letterSpacing: '1px',
          fontFamily: "'Plus Jakarta Sans', sans-serif"
        }}>QUICK STATS</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '12px'
        }}>
          {statsData.map((stat, index) => (
            <div
              key={index}
              style={{
                background: '#FFFFFF',
                border: '3px solid #2D3561',
                borderRadius: '20px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                boxShadow: '6px 6px 0px #2D3561',
                transition: 'all 0.2s'
              }}
            >
              <div style={{
                fontSize: '28px',
                marginBottom: '4px'
              }}>{stat.icon}</div>
              <div style={{ 
                fontSize: '22px', 
                fontWeight: '800',
                color: stat.color,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                letterSpacing: '-0.5px'
              }}>{stat.value}</div>
              <div style={{ 
                fontSize: '11px', 
                color: '#808080',
                fontWeight: '700',
                letterSpacing: '0.5px',
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Sections */}
      <div style={{ padding: '0 20px' }}>
        {menuItems.map((section, sectionIndex) => (
          <div key={sectionIndex} style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '14px', 
              fontWeight: '800',
              margin: '0 0 16px 0',
              color: '#808080',
              letterSpacing: '1px',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>{section.section.toUpperCase()}</h2>
            
            <div style={{ 
              background: '#FFFFFF',
              border: '3px solid #2D3561',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '4px 4px 0px rgba(45, 53, 97, 0.3)'
            }}>
              {section.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  onClick={() => {
                    if (item.hasToggle) {
                      setDarkMode(!darkMode);
                    }
                  }}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: itemIndex < section.items.length - 1 ? '2px solid #2D3561' : 'none',
                    padding: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'left'
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '2px solid #2D3561',
                    boxShadow: '3px 3px 0px rgba(45, 53, 97, 0.4)'
                  }}>
                    <item.icon size={22} color="#FFFFFF" strokeWidth={2.5} />
                  </div>
                  
                  <span style={{ 
                    flex: 1,
                    fontSize: '15px', 
                    fontWeight: '700',
                    color: '#1A1A1A',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>{item.label}</span>
                  
                  {item.badge && (
                    <span style={{
                      background: item.color,
                      color: '#FFFFFF',
                      fontSize: '12px',
                      fontWeight: '800',
                      padding: '6px 12px',
                      borderRadius: '10px',
                      border: '2px solid #2D3561',
                      boxShadow: '2px 2px 0px #2D3561',
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>{item.badge}</span>
                  )}
                  
                  {item.value && (
                    <span style={{ 
                      fontSize: '14px', 
                      color: '#808080',
                      fontFamily: "'Courier New', monospace",
                      fontWeight: '700'
                    }}>{item.value}</span>
                  )}
                  
                  {item.hasToggle && (
                    <div style={{
                      width: '54px',
                      height: '30px',
                      borderRadius: '15px',
                      background: item.toggleValue ? item.color : '#2D3561',
                      position: 'relative',
                      transition: 'all 0.3s',
                      border: '2px solid #2D3561',
                      boxShadow: '2px 2px 0px #2D3561'
                    }}>
                      <div style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        position: 'absolute',
                        top: '1px',
                        left: item.toggleValue ? '26px' : '2px',
                        transition: 'all 0.3s',
                        border: '2px solid #2D3561'
                      }}></div>
                    </div>
                  )}
                  
                  {item.hasChevron && (
                    <ChevronRight size={22} color="#808080" strokeWidth={2.5} />
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <div style={{ padding: '0 20px 24px' }}>
        <button style={{
          width: '100%',
          background: '#FFFFFF',
          border: '3px solid #FF6B35',
          borderRadius: '20px',
          padding: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          cursor: 'pointer',
          transition: 'all 0.2s',
          boxShadow: '6px 6px 0px #FF6B35'
        }}
      >
          <LogOut size={22} color="#FF6B35" strokeWidth={2.5} />
          <span style={{ 
            fontSize: '16px', 
            fontWeight: '800',
            color: '#FF6B35',
            letterSpacing: '1px',
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}>LOGOUT</span>
        </button>
      </div>

      {/* Version Info */}
      <div style={{ 
        padding: '0 20px 24px',
        textAlign: 'center'
      }}>
        <p style={{ 
          fontSize: '12px', 
          color: '#808080',
          margin: 0,
          fontFamily: "'Courier New', monospace",
          fontWeight: '600'
        }}>Version 4.0.1 • Build 2025.01</p>
      </div>

      <BottomNav />
    </div>
  );
}
