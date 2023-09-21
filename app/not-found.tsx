import { Metadata } from "next";
import Link from "next/link";
import React from "react";
export const metadata: Metadata = {
  title: "Not Found",
};
function NotFound() {
  return (
    <main>
      <h2 className="headerTitle text-center">
        Cannot Find the Page You Are Looking For
      </h2>
      <Link href="/" prefetch={false}>
        <h3 className=" animate-pulse text-2xl underline mt-4 text-center">
          Go to Home Page
        </h3>
      </Link>
    </main>
  );
}

export default NotFound;
