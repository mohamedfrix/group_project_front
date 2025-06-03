import Link from "next/link";
import { HomeIcon, UsersIcon, UserPlusIcon, SearchIcon } from "lucide-react";
import "../styles/sidebar.css"

const menuItems = [
  { label: "Dashboard", icon: <HomeIcon size={18} />, href: "/" },
  { label: "Team", icon: <UsersIcon size={18} />, href: "/team" },
  { label: "Add Member", icon: <UserPlusIcon size={18} />, href: "/addmember" },
  { label: "Search", icon: <SearchIcon size={18} />, href: "/search" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link href={item.href} key={item.label}>
            <div className="sidebar-item">
              <p className="icon">{item.icon}</p>
              <p className="label">{item.label}</p>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
