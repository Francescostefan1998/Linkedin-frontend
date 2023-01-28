import React from "react";
import "../../../css/main-content/user-post/post-stats.css";
import { FaThumbsUp } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
export const PostStats = ({ post }) => {
  console.log(post);
  const { mypost } = useSelector((state) => state.post);
  console.log(mypost);
  useEffect(() => {}, [mypost]);

  return (
    <div className="post-stats">
      <div className="likes-container">
        <div className="icon-container">
          <FaThumbsUp className="icon" />
        </div>
        <span className="likes-count">
          {mypost !== undefined ? (
            <span>{mypost.likes.length}</span>
          ) : (
            <span>{post.likes.length}</span>
          )}
        </span>
      </div>
      <div className="comments-container">
        <span className="text">
          {mypost !== undefined ? (
            <span>{mypost.comments.length}</span>
          ) : (
            <span>{post.comments.length}</span>
          )}{" "}
          comments
        </span>
      </div>
    </div>
  );
};
