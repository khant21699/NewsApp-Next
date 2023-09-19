import React from "react";
import Article from "./Article";

type Props = {
  news: NewsResponse;
};

function NewsList({ news }: Props) {
  return (
    <main className=" grid max-md:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 p-10 gap-10">
      {news.data.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </main>
  );
}

export default NewsList;
