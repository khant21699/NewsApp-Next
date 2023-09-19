import { notFound } from "next/navigation";
import React from "react";
import LiveTimeStamp from "../components/LiveTimeStamp";

type Props = {
  searchParams?: Article;
};

export default function page({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    notFound();
  }

  const article: Article = searchParams;
  return (
    <article>
      <section className=" max-md:p-2 flex flex-col lg:flex-row pb-24 lg:px-10">
        {article.image !== "null" && article.image && (
          <img
            src={article.image}
            alt={article.image}
            className=" h-50 max-w-full max-md: mx-auto md:max-w-xl object-cover rounded-lg shadow-md"
          />
        )}
        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2 ">
            {article.title}
          </h1>
          <div className="grid max-sm:grid-cols-1 grid-cols-3 ">
            <h2 className=" font-bold">
              By:{" "}
              {article.author && article.author !== "null"
                ? article.author
                : "Unknown"}
            </h2>
            <h2 className=" font-bold">
              Source:{" "}
              {article.source && article.source !== "null"
                ? article.source
                : "Unknown"}
            </h2>
            <p className="">
              <LiveTimeStamp time={article.published_at} />
            </p>
          </div>
          <p className="pt-4">{article.description}</p>
        </div>
      </section>
    </article>
  );
}