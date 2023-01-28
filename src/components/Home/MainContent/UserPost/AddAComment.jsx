import React from "react";
import "../../../css/main-content/user-post/post-controls.css";
import {
  FaThumbsUp,
  FaRegComment,
  FaShareAlt,
  FaRegSmile,
} from "react-icons/fa";
import { SlPicture } from "react-icons/sl";
import { MdArrowDropDown } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { GrLike } from "react-icons/gr";

import { FiSend } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";
import { useStore } from "react-redux";
import { useSelector } from "react-redux";

export const AddAComment = ({ post }) => {
  console.log(post);
  const [refresh, setRefresh] = useState("");

  const { user: currentUser } = useSelector((state) => state.user);
  const [mycomment, setComment] = useState({
    post: post._id,
    comment: "f",
    username: currentUser._id,
  });
  const [postComments, setListComments] = useState([]);

  console.log(mycomment);

  const getComment = async (e) => {
    const res = await fetch(
      `https://hilarious-toothbrush-production.up.railway.app/posts/${post._id}/comments`
    );
    const data = await res.json();
    console.log(data);
    setListComments(data.reverse());
    setRefresh(data.length);
  };

  useEffect(() => {
    console.log(post);
    getComment();
  }, [refresh]);
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
    console.log(data);

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
        <div className="AddAcomment-mostRelevant">
          Most relevant
          <MdArrowDropDown className="addComment-arrow-icon" />
        </div>
        {postComments.length > 0 ? (
          <div>
            {postComments.map((comment, index) => (
              <div className="addAcomment-singleComment">
                <div className="addAcomment-singleComment-picture">image</div>
                <div className="addAcomment-singleComment-main">
                  <div className="addAcomment-commentList">
                    <div className="addAcomment-commentList-top">
                      <div className="sectionOnTheTop">
                        <div>
                          <p>
                            <strong>name</strong>
                          </p>
                        </div>
                        <div>
                          <p className="gray">other sharing</p>
                        </div>
                      </div>
                      <div className="sectionOnTheTop baseLine">
                        <div>
                          <p className="gray">name</p>
                        </div>
                        <div>
                          <p className="gray">
                            <BsThreeDots className="dots" />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="twodash">--</div>

                    <div className="big-space">
                      {index + 1}, {comment.comment}
                    </div>
                  </div>
                  <div className="under-message">
                    <div className="message-flex">
                      <div>advice</div>
                      <div>
                        <BsDot className="dot" />
                      </div>
                      <div>
                        <GrLike className="like" />
                      </div>
                      <div>2</div>
                    </div>
                    <div className="message-flex-verticla-line"></div>
                    <div className="message-flex">
                      <div>answer</div>
                      <div>
                        <BsDot className="dot" />
                      </div>
                      <div>answer</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
        <div className="AddAcomment-mostRelevant loads">
          Load other comments
        </div>
      </div>
    </div>
  );
};
