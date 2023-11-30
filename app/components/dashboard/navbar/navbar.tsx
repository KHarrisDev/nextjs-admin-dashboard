"use client";

import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="navbar p-5 rounded-lg bg-secondary flex items-center justify-between">
      <div className="navbar-title text-neutral-n00 font-bold capitalize ">
        {pathname.split("/").pop()}
      </div>
      <div className="navbar-menu flex items-center gap-5">
        <div className="navbar-search flex items-center gap-2 bg-tertiary p-3 rounded-xl">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="navbar-input bg-transparent border-none text-neutral-n00"
          />
        </div>
        <div className="navbar-icons flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}
