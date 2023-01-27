import React from "react";
import "../../../css/main-content/user-post/post-controls.css";
import { FaThumbsUp, FaRegComment, FaShareAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";
import { useStore } from "react-redux";
import { useSelector } from "react-redux";
export const PostControls = ({ post }) => {
  const { user: currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  const [like, setLike] = useState(false);
  const [myBody, setBody] = useState({
    username: currentUser._id,
    post: post._id,
  });
  useEffect(() => {}, [currentUser]);

  const fetchLike = async (query) => {
    console.log(query);
    const options = {
      method: query === true ? "POST" : "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myBody),
    };
    console.log(myBody);
    const response = await fetch(
      `https://hilarious-toothbrush-production.up.railway.app/posts/${post._id}/like`,
      options
    );
    console.log(options);
    const data = await response.json();
    return data;
  };
  const checkIfItIsLike = async () => {
    const response = await fetch(
      `https://hilarious-toothbrush-production.up.railway.app/posts/${post._id}`
    );
    const data = await response.json();
    if (data.likes.includes(currentUser._id)) {
      console.log(like);
      setLike(true);
    } else {
      setLike(false);
    }
  };

  const handleLike = async () => {
    await checkIfItIsLike();
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
