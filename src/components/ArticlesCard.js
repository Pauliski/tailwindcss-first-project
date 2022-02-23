import React from "react";

const ArticlesCard = ({ title, date, author, body }) => {
  return (
    <div className="bg-white w-full sm:w-[49%] lg:w-[24%] pb-7 pt-7 pl-5 pr-5 rounded-lg">
      <div>
        <h6 className="font-bold text-lg">{title}</h6>
      </div>
      <div className="flex">
        <p>{date}</p>
        <p>{author}</p>
      </div>
      <div className="">
        <p className="w-full h-[4.5rem] overflow-hidden mt-7 text-base">{body}</p>
      </div>
    </div>
  );
};

export default ArticlesCard;
