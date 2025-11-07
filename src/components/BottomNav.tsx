import { Home, Send, User } from "lucide-react";
import { NavLink } from "./NavLink";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-foreground z-50">
      <div className="flex justify-around items-center h-20 max-w-md mx-auto px-6">
        <NavLink
          to="/home"
          className="flex flex-col items-center gap-1 py-2 px-4 transition-all active:scale-95"
          activeClassName="text-foreground"
        >
          {({ isActive }) => (
            <>
              <div
                className={`p-2 rounded-lg border-2 ${
                  isActive
                    ? "bg-foreground border-foreground"
                    : "bg-white border-foreground"
                }`}
              >
                <Home
                  className={`w-6 h-6 ${
                    isActive ? "text-background" : "text-foreground"
                  }`}
                  strokeWidth={3}
                />
              </div>
              <span
                className={`text-xs font-bold ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Home
              </span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/send"
          className="flex flex-col items-center gap-1 py-2 px-4 transition-all active:scale-95"
          activeClassName="text-foreground"
        >
          {({ isActive }) => (
            <>
              <div
                className={`p-2 rounded-lg border-2 ${
                  isActive
                    ? "bg-foreground border-foreground"
                    : "bg-white border-foreground"
                }`}
              >
                <Send
                  className={`w-6 h-6 ${
                    isActive ? "text-background" : "text-foreground"
                  }`}
                  strokeWidth={3}
                />
              </div>
              <span
                className={`text-xs font-bold ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Send
              </span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/profile"
          className="flex flex-col items-center gap-1 py-2 px-4 transition-all active:scale-95"
          activeClassName="text-foreground"
        >
          {({ isActive }) => (
            <>
              <div
                className={`p-2 rounded-lg border-2 ${
                  isActive
                    ? "bg-foreground border-foreground"
                    : "bg-white border-foreground"
                }`}
              >
                <User
                  className={`w-6 h-6 ${
                    isActive ? "text-background" : "text-foreground"
                  }`}
                  strokeWidth={3}
                />
              </div>
              <span
                className={`text-xs font-bold ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Profile
              </span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
