const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const res = await fetch(
    `http://api.mediastack.com/v1/news?access_key=${
      process.env.MEDIASTACK_API_KEY
    }&categories=${category}&keywords=${
      keywords ? keywords : ""
    }&countries=gb&sort=published_desc&`,
    {
      next: { revalidate: isDynamic ? 0 : 60 },
      cache: isDynamic ? "no-cache" : "default",
    }
  );

  const newRes = await res.json();
  const sortedNews = sortNewsWithImg(newRes);

  return sortedNews;
};

const sortNewsWithImg = (news: NewsResponse) => {
  const withImg = news.data.filter((item) => item.image !== null);
  const withoutImg = news.data.filter((item) => item.image == null);
  const sortedNews: NewsResponse = {
    ...news,
    data: [...withImg, ...withoutImg],
  };
  return sortedNews;
};
export default fetchNews;
