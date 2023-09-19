import React from "react";

type Props = {};

export default function loading({}: Props) {
  return (
    <main>
      <h2 className=" animate-pulse font-serif text-lg text-gray-400 pt-10 text-center">
        Loading....
      </h2>
    </main>
  );
}
