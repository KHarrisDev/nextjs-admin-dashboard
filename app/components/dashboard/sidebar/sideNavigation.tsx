import React from "react";
import MenuLink from "./menulink/MenuLink";
import Image from "next/image";

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export default function sideNavigation() {
  return (
    <div className="side-navigation-container sticky top-40">
      {/* user profile */}
      <div className="profile flex items-center gap-5 mb-5">
        <Image
          className="profile-image rounded-full object-cover"
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className="profile-details flex flex-col">
          <span className="profile-details__username font-medium">
            John Doe
          </span>
          <span className="profile-details__title text-xs text-neutral-n00">
            Administrator
          </span>
        </div>
      </div>
      <ul>
        {menuItems.map((category) => (
          <li key={category.title}>
            <span className="category-title text-neutral-n00 font-bold text-sm mx-0 my-3">
              {category.title}
            </span>
            {category.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className="p-5 my-1 mx-0 flex items-center cursor-pointer rounded-lg gap-3 bg-none border-none text-neutral w-full hover:bg-tertiary">
        <MdLogout />
        Logout
      </button>
    </div>
  );
}
