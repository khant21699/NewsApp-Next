import { categories } from "@/constants";
import fetchNews from "@/utils/fetchNews";
import React from "react";
import NewsList from "../components/NewsList";

type Props = {
  searchParams?: { term: string };
};

async function page({ searchParams }: Props) {
  const news: NewsResponse = await fetchNews(
    categories.join(","),
    searchParams?.term,
    true
  );

  return (
    <main>
      <h1 className="headerTitle">Search Result for : {searchParams?.term}</h1>
      <NewsList news={news} />
    </main>
  );
}

export default page;
