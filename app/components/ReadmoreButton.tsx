"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  article: Article;
};

function ReadmoreButton({ article }: Props) {
  const router = useRouter();
  function handleClick() {
    const query = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article?${query}`;
    // console.log(url);
    router.push(url);
  }
  return (
    <button
      onClick={handleClick}
      className=" bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500"
    >
      Read More
    </button>
  );
}

export default ReadmoreButton;
