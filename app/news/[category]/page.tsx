import NewsList from "@/app/components/NewsList";
import fetchNews from "@/utils/fetchNews";
import React from "react";
import { categories } from "@/constants";

type Props = {
  params: { category: Category };
};

async function NewsCategory({ params }: Props) {
  const news: NewsResponse = await fetchNews(params.category);
  return (
    <main>
      <h1 className="headerTitle">{params.category}</h1>
      <NewsList news={news} />{" "}
    </main>
  );
}

export default NewsCategory;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
