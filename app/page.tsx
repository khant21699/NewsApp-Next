import { categories } from "@/constants";
import fetchNews from "@/utils/fetchNews";
import React from "react";
import NewsList from "./components/NewsList";

export default async function HomePage() {
  const news: NewsResponse = await fetchNews(categories.join(","), "", true);
  // console.log(news);
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
