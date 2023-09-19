"use client";
import React from "react";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import { categories } from "@/constants";

function NavLinks() {
  const pathName = usePathname();
  const isAvtive = (path: string) => {
    return pathName.split("/").pop() === path;
  };
  return (
    <nav className=" grid grid-cols-3 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b">
      {categories.map((category, index) => (
        <NavLink
          key={index}
          category={category}
          isActive={isAvtive(category)}
        />
      ))}
    </nav>
  );
}

export default NavLinks;
