import React, { useState } from 'react';
import { Settings, ChevronRight, Shield, CreditCard, Bell, Moon, Globe, HelpCircle, FileText, LogOut, User } from 'lucide-react';
import BottomNav from '@/components/BottomNav';

export default function PaytmProfile() {
  const [darkMode, setDarkMode] = useState(false);

  const statsData = [
    { label: 'Total Received', value: '₹45,230', color: '#DAA520', icon: '↓' },
    { label: 'Total Sent', value: '₹32,180', color: '#B8860B', icon: '↑' },
    { label: 'Transactions', value: '127', color: '#A9A9A9', icon: '#' },
    { label: 'This Month', value: '₹8,450', color: '#B8860B', icon: '📊' }
  ];

  const menuItems = [
    {
      section: 'Account',
      items: [
        { icon: User, label: 'Personal Information', color: '#B8860B', hasChevron: true },
        { icon: Shield, label: 'Security & Privacy', color: '#A9A9A9', hasChevron: true },
        { icon: CreditCard, label: 'Payment Methods', color: '#DAA520', badge: '3', hasChevron: true }
      ]
    },
    {
      section: 'Preferences',
      items: [
        { icon: Bell, label: 'Notifications', color: '#C0C0C0', hasChevron: true },
        { icon: Moon, label: 'Dark Mode', color: '#B8860B', hasToggle: true, toggleValue: darkMode },
        { icon: Globe, label: 'Language', color: '#DAA520', value: 'English', hasChevron: true }
      ]
    },
    {
      section: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help & Support', color: '#A9A9A9', hasChevron: true },
        { icon: FileText, label: 'Terms & Privacy', color: '#808080', hasChevron: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF5E0] text-[#1A1A1A] font-['Inter'] w-full max-w-[428px] mx-auto pb-[100px]">
      
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
        <h1 className="text-2xl sm:text-[26px] font-extrabold m-0 font-['Plus_Jakarta_Sans'] tracking-tight">
          Profile
        </h1>
        <button className="bg-white border-[3px] border-[#2D3561] rounded-xl w-12 sm:w-[52px] h-12 sm:h-[52px] flex items-center justify-center cursor-pointer shadow-[4px_4px_0px_#2D3561] transition-transform active:scale-95 flex-shrink-0">
          <Settings size={28} color="#1A1A1A" strokeWidth={2.5} />
        </button>
      </div>

      {/* Profile Card */}
      <div className="px-4 sm:px-5 pb-7">
        <div className="bg-white border-[3px] border-[#2D3561] rounded-3xl p-8 sm:p-10 flex flex-col items-center gap-4 shadow-[6px_6px_0px_rgba(45,53,97,0.4)]">
          {/* Avatar */}
            <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-gradient-to-br from-[#B8860B] to-[#DAA520] flex items-center justify-center text-4xl sm:text-5xl font-extrabold text-white border-4 border-[#2D3561] shadow-[6px_6px_0px_#2D3561] font-['Plus_Jakarta_Sans'] mb-2">
            RK
          </div>

          {/* Name & Email */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-[26px] font-extrabold m-0 mb-2 font-['Plus_Jakarta_Sans'] tracking-tight">
              Rajesh Kumar
            </h2>
            <p className="text-sm sm:text-[15px] text-[#808080] m-0 font-semibold tracking-wide">
              Rajesh172@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-4 sm:px-5 pb-8">
        <h2 className="text-sm font-extrabold m-0 mb-5 text-[#808080] tracking-[1.2px] font-['Plus_Jakarta_Sans']">
          QUICK STATS
        </h2>
        
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="bg-white border-[3px] border-[#2D3561] rounded-[20px] p-5 sm:p-6 flex flex-col gap-3 shadow-[6px_6px_0px_#2D3561] transition-transform active:scale-95 cursor-pointer min-h-[130px] sm:min-h-[140px] justify-between"
            >
              <div className="text-2xl sm:text-[32px] leading-none">{stat.icon}</div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold font-['Plus_Jakarta_Sans'] tracking-tight mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-[#808080] font-bold tracking-wide font-['Plus_Jakarta_Sans'] uppercase">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Sections */}
      <div className="px-4 sm:px-5">
        {menuItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            <h2 className="text-sm font-extrabold m-0 mb-5 text-[#808080] tracking-[1.2px] font-['Plus_Jakarta_Sans']">
              {section.section.toUpperCase()}
            </h2>
            
            <div className="bg-white border-[3px] border-[#2D3561] rounded-[20px] overflow-hidden shadow-[4px_4px_0px_rgba(45,53,97,0.4)]">
              {section.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  onClick={() => {
                    if (item.hasToggle) {
                      setDarkMode(!darkMode);
                    }
                  }}
                  className="w-full bg-transparent border-none p-4 sm:p-5 flex items-center gap-3 sm:gap-4 cursor-pointer transition-all text-left min-h-[76px] sm:min-h-[84px]"
                  style={{
                    borderBottom: itemIndex < section.items.length - 1 ? '3px solid #2D3561' : 'none'
                  }}
                >
                  <div className="w-11 sm:w-[52px] h-11 sm:h-[52px] rounded-full flex items-center justify-center flex-shrink-0 border-[3px] border-[#2D3561] shadow-[3px_3px_0px_rgba(45,53,97,0.4)]"
                    style={{ background: item.color }}
                  >
                    <item.icon size={24} color="#FFFFFF" strokeWidth={2.5} />
                  </div>
                  
                  <span className="flex-1 text-sm sm:text-base font-bold font-['Plus_Jakarta_Sans'] truncate">
                    {item.label}
                  </span>
                  
                  {item.badge && (
                    <span className="text-xs sm:text-[13px] font-extrabold px-3 py-2 rounded-[10px] border-2 border-[#2D3561] shadow-[2px_2px_0px_#2D3561] font-['Plus_Jakarta_Sans'] min-w-[36px] text-center text-white"
                      style={{ background: item.color }}
                    >
                      {item.badge}
                    </span>
                  )}
                  
                  {item.value && (
                    <span className="text-sm sm:text-[15px] text-[#808080] font-['Courier_New'] font-bold">
                      {item.value}
                    </span>
                  )}
                  
                  {item.hasToggle && (
                    <div className="w-[54px] sm:w-[60px] h-8 sm:h-[34px] rounded-[17px] relative transition-all border-[3px] border-[#2D3561] shadow-[2px_2px_0px_#2D3561]"
                      style={{ background: item.toggleValue ? item.color : '#E0E0E0' }}
                    >
                      <div className="w-6 h-6 rounded-full bg-white absolute top-0 border-2 border-[#2D3561] transition-all"
                        style={{ left: item.toggleValue ? '26px' : '2px' }}
                      ></div>
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
      <div className="px-4 sm:px-5 pb-7">
        <button className="w-full bg-white border-[3px] border-[#B8860B] rounded-[20px] p-4 sm:p-5 flex items-center justify-center gap-3 cursor-pointer transition-transform active:scale-95 shadow-[6px_6px_0px_#B8860B] min-h-[64px] sm:min-h-[68px]">
          <LogOut size={28} color="#B8860B" strokeWidth={2.5} />
          <span className="text-base sm:text-lg font-extrabold text-[#B8860B] tracking-wide font-['Plus_Jakarta_Sans']">
            LOGOUT
          </span>
        </button>
      </div>

      {/* Version Info */}
      <div className="px-4 sm:px-5 pb-7 text-center">
        <p className="text-xs sm:text-[13px] text-[#808080] m-0 font-['Courier_New'] font-semibold">
          Version 4.0.1 • Build 2025.01
        </p>
      </div>

      <BottomNav />
    </div>
  );
}
