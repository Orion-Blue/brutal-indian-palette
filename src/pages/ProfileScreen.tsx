import React, { useState } from 'react';
import { Settings, ChevronRight, Shield, CreditCard, Bell, Moon, Globe, HelpCircle, FileText, LogOut, User } from 'lucide-react';
import BottomNav from '@/components/BottomNav';
import { Text } from '@/components/atoms/Text';
import { Avatar } from '@/components/atoms/Avatar';
import { IconButton } from '@/components/atoms/IconButton';
import { cn } from '@/lib/utils';

export default function ProfileScreen() {
  const [darkMode, setDarkMode] = useState(false);

  const statsData = [
    { label: 'Total Received', value: '₹45,230', color: 'hsl(142, 71%, 45%)', icon: '↓' },
    { label: 'Total Sent', value: '₹32,180', color: 'hsl(0, 84%, 60%)', icon: '↑' },
    { label: 'Transactions', value: '127', color: 'hsl(217, 91%, 60%)', icon: '#' },
    { label: 'This Month', value: '₹8,450', color: 'hsl(48, 100%, 50%)', icon: '📊' }
  ];

  const menuItems = [
    {
      section: 'Account',
      items: [
        { icon: User, label: 'Personal Information', color: 'hsl(48, 100%, 50%)', hasChevron: true },
        { icon: Shield, label: 'Security & Privacy', color: 'hsl(217, 91%, 60%)', hasChevron: true },
        { icon: CreditCard, label: 'Payment Methods', color: 'hsl(142, 71%, 45%)', badge: '3', hasChevron: true }
      ]
    },
    {
      section: 'Preferences',
      items: [
        { icon: Bell, label: 'Notifications', color: 'hsl(258, 90%, 66%)', hasChevron: true },
        { icon: Moon, label: 'Dark Mode', color: 'hsl(25, 95%, 53%)', hasToggle: true, toggleValue: darkMode },
        { icon: Globe, label: 'Language', color: 'hsl(340, 82%, 70%)', value: 'English', hasChevron: true }
      ]
    },
    {
      section: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help & Support', color: 'hsl(217, 91%, 60%)', hasChevron: true },
        { icon: FileText, label: 'Terms & Privacy', color: 'hsl(0, 0%, 45%)', hasChevron: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground w-full max-w-md mx-auto pb-28">
      
      {/* Header */}
      <div className="px-5 py-4 flex justify-between items-center">
        <Text variant="h2" weight="bold" className="text-foreground">
          Profile
        </Text>
        <IconButton icon={Settings} variant="default" size="md" />
      </div>

      {/* Profile Card */}
      <div className="px-5 pb-7">
        <div className="bg-card border border-border rounded-3xl p-10 flex flex-col items-center gap-4 shadow-card">
          {/* Avatar */}
          <Avatar
            initial="RK"
            color="hsl(48, 100%, 50%)"
            size="xl"
            className="mb-2"
          />

          {/* Name & Email */}
          <div className="text-center">
            <Text variant="h2" weight="bold" className="text-foreground block mb-2">
              Rajesh Kumar
            </Text>
            <Text variant="body-small" className="text-muted-foreground">
              Rajesh172@gmail.com
            </Text>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-5 pb-8">
        <Text variant="caption" weight="bold" className="text-muted-foreground block mb-5 uppercase tracking-wide">
          Quick Stats
        </Text>
        
        <div className="grid grid-cols-2 gap-3">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-all active:scale-98 cursor-pointer min-h-[140px] justify-between"
            >
              <div className="text-3xl leading-none">{stat.icon}</div>
              <div>
                <Text
                  variant="h3"
                  weight="bold"
                  className="block mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </Text>
                <Text variant="micro" weight="semibold" className="text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Sections */}
      <div className="px-5">
        {menuItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            <Text variant="caption" weight="bold" className="text-muted-foreground block mb-5 uppercase tracking-wide">
              {section.section}
            </Text>
            
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
              {section.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  onClick={() => {
                    if (item.hasToggle) {
                      setDarkMode(!darkMode);
                    }
                  }}
                  className={cn(
                    "w-full bg-transparent border-none p-5 flex items-center gap-4 cursor-pointer transition-all text-left hover:bg-muted/30",
                    itemIndex < section.items.length - 1 && "border-b border-border"
                  )}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon size={20} color="#FFFFFF" strokeWidth={2} />
                  </div>
                  
                  <Text variant="body" weight="semibold" className="flex-1 text-foreground truncate">
                    {item.label}
                  </Text>
                  
                  {item.badge && (
                    <span
                      className="text-xs font-bold px-3 py-1.5 rounded-full min-w-[32px] text-center text-white"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.badge}
                    </span>
                  )}
                  
                  {item.value && (
                    <Text variant="body-small" className="text-muted-foreground">
                      {item.value}
                    </Text>
                  )}
                  
                  {item.hasToggle && (
                    <div
                      className={cn(
                        "w-14 h-8 rounded-full relative transition-all",
                        item.toggleValue ? "" : "bg-muted"
                      )}
                      style={{ backgroundColor: item.toggleValue ? item.color : undefined }}
                    >
                      <div
                        className={cn(
                          "w-6 h-6 rounded-full bg-white absolute top-1 transition-all shadow-sm",
                          item.toggleValue ? "right-1" : "left-1"
                        )}
                      />
                    </div>
                  )}
                  
                  {item.hasChevron && (
                    <ChevronRight size={20} className="text-muted-foreground" strokeWidth={2} />
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <div className="px-5 pb-7">
        <button className="w-full bg-card border-2 border-destructive rounded-2xl p-5 flex items-center justify-center gap-3 cursor-pointer transition-all active:scale-98 shadow-sm hover:shadow-md hover:bg-destructive/5">
          <LogOut size={24} className="text-destructive" strokeWidth={2} />
          <Text variant="body-large" weight="bold" className="text-destructive tracking-wide">
            LOGOUT
          </Text>
        </button>
      </div>

      {/* Version Info */}
      <div className="px-5 pb-7 text-center">
        <Text variant="body-small" className="text-muted-foreground">
          Version 4.0.1 • Build 2025.01
        </Text>
      </div>

      <BottomNav />
    </div>
  );
}
