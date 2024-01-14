import React from "react";
import CardComment from "../../components/comment-cards";

const Comments = () => {
  return (
    <>
      <div className="comment__header">
        <h1 className="flex items-center gap-2 text-lg font-semibold  ">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
            >
              <circle cx="7.5" cy="8" r="7.5" fill="#E57C23" />
            </svg>
          </span>
          دیدگاه های من
        </h1>
      </div>
      <CardComment />
    </>
  );
};

export default Comments;
