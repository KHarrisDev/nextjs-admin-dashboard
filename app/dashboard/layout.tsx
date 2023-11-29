import React from "react";
import SideNavigation from "../components/dashboard/sidebar/sideNavigation";
import Navbar from "../components/dashboard/navbar/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-container flex">
      <div className="menu flex-1 bg-secondary p-5">
        <SideNavigation />
      </div>
      <div className="content content-flex-4 p-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
