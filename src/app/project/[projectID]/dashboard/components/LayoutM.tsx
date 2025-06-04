// components/Layout.tsx
import React from "react";
import Sidebar from "./SidebarM";
import "../styles/custom.css";



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <div className="main-content">
        {children}
      </div>
    </div>
  );
}

