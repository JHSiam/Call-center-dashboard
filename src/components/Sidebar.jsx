import { NavLink } from "react-router-dom";

const linkClass =
  "flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#1a2b6d] transition";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0a1330] p-4 flex flex-col">
      <div className="text-xl font-bold mb-8">⚡</div>

      <nav className="flex flex-col gap-2">
        <NavLink to="/" end className={linkClass}>
          Dashboard Overview
        </NavLink>
        <NavLink to="/calls" className={linkClass}>
          Call Logs
        </NavLink>
        <NavLink to="/appointments" className={linkClass}>
          Appointments
        </NavLink>
        <NavLink to="/settings" className={linkClass}>
          Settings
        </NavLink>
      </nav>

      <div className="mt-auto text-red-400 px-4 py-3 cursor-pointer">
        Log Out
      </div>
    </aside>
  );
}
