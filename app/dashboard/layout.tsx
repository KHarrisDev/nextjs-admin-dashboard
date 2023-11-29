import React from "react";
import SideNavigation from "../components/dashboard/sidebar/sideNavigation";
import Navbar from "../components/dashboard/navbar/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <SideNavigation />
      </div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
