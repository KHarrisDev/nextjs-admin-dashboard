"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuLink({ item }) {
  const pathname = usePathname();

  console.log(pathname, item);
  return (
    <Link
      className={`menu-link p-5 flex items-center gap-3 hover:bg-tertiary my-1 mx-0 rounded-lg 
      ${pathname === item.path && "active"}`}
      href={item.path}
    >
      {item.icon}
      {item.title}
    </Link>
  );
}
