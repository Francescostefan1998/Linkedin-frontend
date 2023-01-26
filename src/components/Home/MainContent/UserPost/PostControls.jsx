import React from "react";
import "../../../css/main-content/user-post/post-controls.css";
import { FaThumbsUp, FaRegComment, FaShareAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";
export const PostControls = ({ post }) => {
  const [like, setLike] = useState(false);

  const fetchLike = async (query) => {
    console.log(query);
    const options = {
      method: query === true ? "POST" : "DELETE",
    };
    const response = await fetch(
      `https://hilarious-toothbrush-production.up.railway.app/posts/${post._id}/like`,
      options
    );
    console.log(options);
    const data = await response.json();
    return data;
  };

  const handleLike = () => {
    console.log("handleLike triggered");
    if (like) {
      setLike(false);
      fetchLike(false);
    } else {
      setLike(true);
      fetchLike(true);
    }
  };

  return (
    <div className="post-controls">
      <div className="control-container" onClick={(e) => handleLike()}>
        <FaThumbsUp className="icon" />
        <span className="text">Like</span>
      </div>
      <div className="control-container">
        <FaRegComment className="icon" />
        <span className="text">Comment</span>
      </div>
      <div className="control-container">
        <FaShareAlt className="icon" />
        <span className="text">Repost</span>
      </div>
      <div className="control-container">
        <FiSend className="icon" />
        <span className="text">Send</span>
      </div>
    </div>
  );
};
