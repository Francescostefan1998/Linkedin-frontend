import React from "react";
import "../../../css/main-content/user-post/post-stats.css";
import { FaThumbsUp } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
export const PostStats = ({ post }) => {
  console.log(post);

  return (
    <div className="post-stats">
      <div className="likes-container">
        <div className="icon-container">
          <FaThumbsUp className="icon" />
        </div>
        <span className="likes-count">
          {post && <span>{post.likes.length}</span>}
        </span>
      </div>
      <div className="comments-container">
        <span className="text">{post.comments.length} comments</span>
      </div>
    </div>
  );
};
