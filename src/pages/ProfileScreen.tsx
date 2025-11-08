import React, { useState } from 'react';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
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
        { icon: PersonRoundedIcon, label: 'Personal Information', color: '#FF6B35', hasChevron: true },
        { icon: SecurityRoundedIcon, label: 'Security & Privacy', color: '#6C63FF', hasChevron: true },
        { icon: CreditCardRoundedIcon, label: 'Payment Methods', color: '#00D9C0', badge: '3', hasChevron: true }
      ]
    },
    {
      section: 'Preferences',
      items: [
        { icon: NotificationsRoundedIcon, label: 'Notifications', color: '#FF6B9D', hasChevron: true },
        { icon: DarkModeRoundedIcon, label: 'Dark Mode', color: '#FFD93D', hasToggle: true, toggleValue: darkMode },
        { icon: LanguageRoundedIcon, label: 'Language', color: '#00C896', value: 'English', hasChevron: true }
      ]
    },
    {
      section: 'Support',
      items: [
        { icon: HelpRoundedIcon, label: 'Help & Support', color: '#FF9F40', hasChevron: true },
        { icon: DescriptionRoundedIcon, label: 'Terms & Privacy', color: '#808080', hasChevron: true }
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
          <SettingsRoundedIcon 
            sx={{ 
              fontSize: 28, 
              color: '#1A1A1A',
              fontWeight: 700
            }} 
          />
        </button>
      </div>

      {/* Profile Card */}
      <div style={{ padding: '0 20px 28px' }}>
        <div style={{
          background: '#FFFFFF',
          border: '3px solid #2D3561',
          borderRadius: '24px',
          padding: '40px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          boxShadow: '6px 6px 0px rgba(45, 53, 97, 0.4)'
        }}>
          {/* Avatar */}
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
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            marginBottom: '8px'
          }}>
            RK
          </div>

          {/* Name & Email */}
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ 
              fontSize: '26px', 
              fontWeight: '800',
              margin: '0 0 8px 0',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: '#1A1A1A',
              letterSpacing: '-0.5px'
            }}>Rajesh Kumar</h2>
            <p style={{ 
              fontSize: '15px', 
              color: '#808080',
              margin: 0,
              fontWeight: '600',
              letterSpacing: '0.2px'
            }}>Rajesh172@gmail.com</p>
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
                    <item.icon 
                      sx={{ 
                        fontSize: 28, 
                        color: '#FFFFFF',
                        fontWeight: 700
                      }} 
                    />
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
                    <ChevronRightRoundedIcon 
                      sx={{ 
                        fontSize: 28, 
                        color: '#808080',
                        fontWeight: 700
                      }} 
                    />
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
          <LogoutRoundedIcon 
            sx={{ 
              fontSize: 28, 
              color: '#FF6B35',
              fontWeight: 700
            }} 
          />
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