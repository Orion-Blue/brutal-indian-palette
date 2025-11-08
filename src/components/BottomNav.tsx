import { Home, BarChart3, Wallet, Send, User } from 'lucide-react';
import { NavLink } from "./NavLink";

const BottomNav = () => {
  const navItems = [
    { to: "/home", icon: Home, label: "Home" },
    { to: "/analytics", icon: BarChart3, label: "Stats" },
    { to: "/wallet", icon: Wallet, label: "Wallet" },
    { to: "/send", icon: Send, label: "Send" },
    { to: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-foreground z-50">
      <div className="flex justify-around items-center h-20 max-w-md mx-auto px-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="flex flex-col items-center gap-1 py-2 px-3 transition-all active:scale-95"
            activeClassName="text-foreground"
          >
            {({ isActive }) => (
              <>
                <div
                  className={`p-2 rounded-xl border-3 transition-all ${
                    isActive
                      ? "bg-gradient-to-br from-[#6C63FF] to-[#00D9C0] border-foreground shadow-[3px_3px_0px_rgba(45,53,97,1)]"
                      : "bg-white border-foreground"
                  }`}
                  style={{
                    borderWidth: '3px'
                  }}
                >
                  <item.icon
                    size={24}
                    color={isActive ? "#FFFFFF" : "#2D3561"}
                    strokeWidth={2.5}
                  />
                </div>
                <span
                  className={`text-[10px] font-extrabold ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    letterSpacing: '0.5px'
                  }}
                >
                  {item.label.toUpperCase()}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
