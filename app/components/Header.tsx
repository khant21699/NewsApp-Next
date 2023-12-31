import React from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header>
      <div className=" grid grid-cols-3 px-10 py-5 items-center">
        <div>
          <MobileNav />
        </div>
        <Link href="/" prefetch={false}>
          <h1 className=" font-serif text-4xl max-md:text-xl text-center">
            The{" "}
            <span className=" underline decoration-6 decoration-orange-500">
              Live
            </span>{" "}
            News
          </h1>
        </Link>
        <div className=" flex justify-end space-x-2 items-center">
          {/* DarkModeBtn */}
          <DarkModeButton />
          {/* subscribe btn */}
          {/* <button className=" hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
            Subscribe Now
          </button> */}
        </div>
      </div>
      {/* navlinks */}
      <div className="max-sm:hidden">
        <NavLinks />
      </div>

      {/*  search box  */}
      <SearchBox />
    </header>
  );
}

export default Header;
