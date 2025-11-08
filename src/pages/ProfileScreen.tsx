import React, { useState } from 'react';
import { Settings, ChevronRight, Shield, CreditCard, Bell, Moon, Globe, HelpCircle, FileText, LogOut, User, CheckCircle } from 'lucide-react';
import BottomNav from '@/components/BottomNav';

export default function PaytmProfile() {
  const [darkMode, setDarkMode] = useState(false);

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
        }}>Profile</h1>
        <button style={{
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
          <Settings size={24} color="#1A1A1A" strokeWidth={2.5} />
        </button>
      </div>

      {/* Profile Card */}
      <div style={{ padding: '0 20px 28px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF5E0 100%)',
          border: '3px solid #2D3561',
          borderRadius: '24px',
          padding: '40px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          boxShadow: '6px 6px 0px rgba(45, 53, 97, 0.4)'
        }}>
          {/* Avatar */}
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '112px',
              height: '112px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FF6B35, #6C63FF)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
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
              bottom: '0',
              right: '0',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#00D9C0',
              border: '3px solid #FFF5E0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '3px 3px 0px #2D3561'
            }}>
              <CheckCircle size={20} color="#FFFFFF" strokeWidth={3} />
            </div>
          </div>

          {/* Name & Details */}
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ 
              fontSize: '28px', 
              fontWeight: '800',
              margin: '0 0 8px 0',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: '#1A1A1A',
              letterSpacing: '-0.5px'
            }}>Rajesh Kumar</h2>
            <p style={{ 
              fontSize: '16px', 
              color: '#808080',
              margin: '0 0 16px 0',
              fontFamily: "'Courier New', monospace",
              fontWeight: '700'
            }}>+91 98765 43210</p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: '#00D9C0',
              border: '3px solid #2D3561',
              borderRadius: '12px',
              padding: '10px 20px',
              boxShadow: '3px 3px 0px #2D3561'
            }}>
              <CheckCircle size={18} color="#FFFFFF" strokeWidth={3} />
              <span style={{ 
                fontSize: '14px', 
                fontWeight: '800',
                color: '#FFFFFF',
                letterSpacing: '1px',
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
          margin: '0 0 20px 0',
          color: '#808080',
          letterSpacing: '1.2px',
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
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                boxShadow: '6px 6px 0px #2D3561',
                transition: 'transform 0.2s',
                cursor: 'pointer',
                minHeight: '140px',
                justifyContent: 'space-between'
              }}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{
                fontSize: '32px',
                lineHeight: '1'
              }}>{stat.icon}</div>
              <div>
                <div style={{ 
                  fontSize: '24px', 
                  fontWeight: '800',
                  color: stat.color,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  letterSpacing: '-0.5px',
                  marginBottom: '8px'
                }}>{stat.value}</div>
                <div style={{ 
                  fontSize: '12px', 
                  color: '#808080',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  textTransform: 'uppercase'
                }}>{stat.label}</div>
              </div>
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
              margin: '0 0 20px 0',
              color: '#808080',
              letterSpacing: '1.2px',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>{section.section.toUpperCase()}</h2>
            
            <div style={{ 
              background: '#FFFFFF',
              border: '3px solid #2D3561',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '4px 4px 0px rgba(45, 53, 97, 0.4)'
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
                    borderBottom: itemIndex < section.items.length - 1 ? '3px solid #2D3561' : 'none',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                    textAlign: 'left',
                    minHeight: '84px'
                  }}
                >
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '3px solid #2D3561',
                    boxShadow: '3px 3px 0px rgba(45, 53, 97, 0.4)'
                  }}>
                    <item.icon size={24} color="#FFFFFF" strokeWidth={2.5} />
                  </div>
                  
                  <span style={{ 
                    flex: 1,
                    fontSize: '16px', 
                    fontWeight: '700',
                    color: '#1A1A1A',
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>{item.label}</span>
                  
                  {item.badge && (
                    <span style={{
                      background: item.color,
                      color: '#FFFFFF',
                      fontSize: '13px',
                      fontWeight: '800',
                      padding: '8px 14px',
                      borderRadius: '10px',
                      border: '2px solid #2D3561',
                      boxShadow: '2px 2px 0px #2D3561',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      minWidth: '40px',
                      textAlign: 'center'
                    }}>{item.badge}</span>
                  )}
                  
                  {item.value && (
                    <span style={{ 
                      fontSize: '15px', 
                      color: '#808080',
                      fontFamily: "'Courier New', monospace",
                      fontWeight: '700'
                    }}>{item.value}</span>
                  )}
                  
                  {item.hasToggle && (
                    <div style={{
                      width: '60px',
                      height: '34px',
                      borderRadius: '17px',
                      background: item.toggleValue ? item.color : '#E0E0E0',
                      position: 'relative',
                      transition: 'all 0.3s',
                      border: '3px solid #2D3561',
                      boxShadow: '2px 2px 0px #2D3561'
                    }}>
                      <div style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        position: 'absolute',
                        top: '1px',
                        left: item.toggleValue ? '30px' : '2px',
                        transition: 'all 0.3s',
                        border: '2px solid #2D3561'
                      }}></div>
                    </div>
                  )}
                  
                  {item.hasChevron && (
                    <ChevronRight size={24} color="#808080" strokeWidth={2.5} />
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <div style={{ padding: '0 20px 28px' }}>
        <button style={{
          width: '100%',
          background: '#FFFFFF',
          border: '3px solid #FF6B35',
          borderRadius: '20px',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          cursor: 'pointer',
          transition: 'transform 0.2s',
          boxShadow: '6px 6px 0px #FF6B35',
          minHeight: '68px'
        }}
        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <LogOut size={24} color="#FF6B35" strokeWidth={2.5} />
          <span style={{ 
            fontSize: '18px', 
            fontWeight: '800',
            color: '#FF6B35',
            letterSpacing: '1px',
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}>LOGOUT</span>
        </button>
      </div>

      {/* Version Info */}
      <div style={{ 
        padding: '0 20px 28px',
        textAlign: 'center'
      }}>
        <p style={{ 
          fontSize: '13px', 
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