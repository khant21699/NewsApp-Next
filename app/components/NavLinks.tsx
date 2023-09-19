"use client";
import React from "react";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import { categories } from "@/constants";

type props = {
  setShowNav?: (val: boolean) => void;
};

function NavLinks({ setShowNav }: props) {
  const pathName = usePathname();
  const isAvtive = (path: string) => {
    return pathName.split("/").pop() === path;
  };
  return (
    <nav
      onClick={() => {
        if (setShowNav !== undefined) setShowNav(false);
      }}
      className=" grid grid-cols-3 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b border-black dark:border-white max-sm:flex max-sm:flex-col"
    >
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
