import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

const navLinkClass = ({ isActive }) =>
  `flex items-center gap-3 px-2 py-1 rounded-[12px] transition border justify-start
   ${isActive
    ? "text-white border-white shadow-[0_0_22px_rgba(255,255,255,0.35)] bg-gradient-to-b from-[#152252] to-[#111B3C]"
    : "text-gray-300 border-transparent hover:border-white"
  }`;


export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // 🔹 Dynamic page title
  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard Overview";
      case "/calls":
        return "Call Logs & History";
      case "/appointments":
        return "Appointments";
      case "/settings":
        return "Settings";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="flex h-screen bg-[#0b1437] text-white max-w-[1440px] mx-auto">

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-20 w-64 h-full p-4
        flex flex-col bg-[#111B3C]
        transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Logo */}
        <div className="text-xl font-bold mb-8"><img src="Container.png" className="mx-auto w-[56px] h-[56px]"></img></div>

        {/* Navigation */}
        <ul className="space-y-2 flex-1">
          <li>
            <NavLink to="/" end className={navLinkClass}>
              <img
                src="line-md_home-twotone.png"
                alt="Dashboard"
                className="w-5 h-5"
              />
              <span>Dashboard Overview</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/calls" className={navLinkClass}>
              <img
                src="Icon.png"
                alt="Call Logs"
                className="w-5 h-5"
              />
              <span>Call Logs</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/appointments" className={navLinkClass}>
              <img
                src="Icon (1).png"
                alt="Appointments"
                className="w-5 h-5"
              />
              <span>Appointments</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/settings" className={navLinkClass}>
              <img
                src="Icon (2).png"
                alt="Settings"
                className="w-5 h-5"
              />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>


        {/* Login / Logout button at bottom */}
        {/* Login / Logout button at bottom */}
        <button
          className="
    flex items-center gap-3 px-2 py-1 rounded-[12px] justify-start
    text-red-400
    hover:bg-[#1a2b6d]
  "
        >
          <img
            src="streamline-flex_logout-1-remix.png"
            alt="Logout"
            className="w-5 h-5"
          />
          <span>Logout</span>
        </button>

      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-[#152353]">

        {/* Topbar */}
        <header className="h-16 flex items-center py-11 justify-between px-4 md:px-6 bg-[#111B3C] border-b border-white/10">
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          {/* 🔹 Dynamic heading */}
          <h1 className="text-xl md:text-3xl font-semibold">{getTitle()}</h1>

          <div className="flex justify-between items-center gap-5">
            <img src="notifications_none.png" alt="" />


            <img
            src="Avatar Style 6.png"
            className="w-16 h-16 rounded-full"
            alt="profile"
          />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
