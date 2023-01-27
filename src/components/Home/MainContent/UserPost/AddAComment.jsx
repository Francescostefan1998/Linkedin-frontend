import React from "react";
import "../../../css/main-content/user-post/post-controls.css";
import {
  FaThumbsUp,
  FaRegComment,
  FaShareAlt,
  FaRegSmile,
} from "react-icons/fa";
import { SlPicture } from "react-icons/sl";

import { FiSend } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";
import { useStore } from "react-redux";
import { useSelector } from "react-redux";

export const AddAComment = ({ post }) => {
  const { user: currentUser } = useSelector((state) => state.user);
  const [mycomment, setComment] = useState({
    post: post._id,
    comment: "f",
    username: currentUser._id,
  });
  console.log(mycomment);

  useEffect(() => {
    console.log(post);
  }, [post]);
  const postComment = async () => {
    const res = await fetch(
      `https://hilarious-toothbrush-production.up.railway.app/posts/${post._id}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mycomment),
      }
    );
    const data = await res.json();
    return data;
  };
  return (
    <div>
      <div className="addAcomment-flex">
        <div className="addComment-image">
          <img src={currentUser.image} alt="profileimage" />
        </div>
        <div className="addComment-input">
          <input
            type="text"
            placeholder="write here your comment"
            onChange={(e) =>
              setComment({ ...mycomment, comment: e.target.value })
            }
          />
          <div className="addAcomment-flex-icons">
            <FaRegSmile />
            <SlPicture onClick={(e) => postComment()} />
          </div>
        </div>
      </div>
      <div>
        {post.comments.map((comment, index) => (
          <div>{comment.comment}</div>
        ))}
      </div>
    </div>
  );
};
