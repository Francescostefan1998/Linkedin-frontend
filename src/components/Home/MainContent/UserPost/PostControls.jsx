import React from "react";
import "../../../css/main-content/user-post/post-controls.css";
import { FaThumbsUp, FaRegComment, FaShareAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";
import { useStore } from "react-redux";
import { useSelector } from "react-redux";
import { AddAComment } from "./AddAComment";
export const PostControls = ({ post }) => {
  const { user: currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  const [like, setLike] = useState(false);
  const [myBody, setBody] = useState({
    username: currentUser._id,
    post: post._id,
  });

  const [show, setShow] = useState("falsee");
  useEffect(() => {}, [currentUser]);

  const fetchLike = async (query) => {
    console.log(query);
    const options = {
      method: query === "truee" ? "POST" : "DELETE",
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
    console.log(data.likes);
    const findUser = data.likes.find((like) => like === currentUser._id);
    console.log(findUser);
    if (findUser) {
      console.log(like);

      setLike(false);
      fetchLike("falsee");
    } else {
      setLike(true);
      fetchLike("truee");
    }
  };

  const handleLike = async () => {
    await checkIfItIsLike();
  };
  const showComment = async () => {
    if (show === "truee") {
      setShow("falsee");
    } else {
      setShow("truee");
    }
  };
  return (
    <div>
      <div className="post-controls">
        <div className="control-container" onClick={(e) => handleLike()}>
          <FaThumbsUp className="icon" />
          <span className="text">Like</span>
        </div>
        <div className="control-container" onClick={(e) => showComment()}>
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
      <div>{show === "truee" ? <AddAComment post={post} /> : <div></div>}</div>
    </div>
  );
};
