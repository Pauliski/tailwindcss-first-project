import React from "react";
import { articlesContent } from "../StaticData";
import ArticlesCard from "./ArticlesCard";

const Articles = () => {
  return (
    <div className="bg-gray-100 py-10 sm:py-20 px-5 sm:px-[6.6116%]">
      <div className="mb-5">
        <dh1>LES</dh1>
        <h1>ARTICLES</h1>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-2">
        {articlesContent.map((item) => (
          <ArticlesCard
            title={item.title}
            date={item.date}
            author={item.author}
            body={item.body}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
