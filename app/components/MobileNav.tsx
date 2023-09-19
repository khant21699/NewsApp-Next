"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import NavLinks from "./NavLinks";

const MobileNav = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  return (
    <div className="max-sm:block hidden">
      <Bars3Icon
        onClick={(e) => {
          setShowNav(true);
        }}
        className=" h-8 w-8 cursor-pointer hidden max-sm:block"
      />
      {showNav && (
        <div className="fixed w-[50vw] h-[200vh] left-0 top-0 dark:bg-slate-900">
          <div className="mt-4 items-center flex justify-around pb-4 border-b-[2px] border-orange-500 ">
            <h2 className="text-xl text-center ">Categories</h2>
            <XMarkIcon
              onClick={(e) => {
                setShowNav(false);
              }}
              className="h-8 w-8"
            />
          </div>

          <NavLinks setShowNav={setShowNav} />
        </div>
      )}
    </div>
  );
};

export default MobileNav;
