import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { NavLink } from "./NavLink";

const BottomNav = () => {
  const navItems = [
    { to: "/home", icon: HomeRoundedIcon, label: "Home" },
    { to: "/analytics", icon: BarChartRoundedIcon, label: "Stats" },
    { to: "/wallet", icon: AccountBalanceWalletRoundedIcon, label: "Wallet" },
    { to: "/messages", icon: ChatBubbleRoundedIcon, label: "Chat" },
    { to: "/profile", icon: PersonRoundedIcon, label: "Profile" },
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
                    sx={{
                      fontSize: 24,
                      color: isActive ? "#FFFFFF" : "#2D3561",
                      fontWeight: 700
                    }}
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
