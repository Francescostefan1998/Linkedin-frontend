import React, { useState, useEffect } from "react";
import "../../css/main-content/user-post.css";
import { PostContent } from "./UserPost/PostContent";
import { PostControls } from "./UserPost/PostControls";
import { PostDescription } from "./UserPost/PostDescription";
import { PostStats } from "./UserPost/PostStats";
import { UserInfo } from "./UserPost/UserInfo";
import { useSelector } from "react-redux";
const UserPost = ({ post }) => {
  console.log(post);
  const [postData, setPostData] = useState(null);
  const [userData, setUserData] = useState(null);
  const { post: mypost } = useSelector((state) => state.post);

  const getLatestPostUser = async (userId) => {
    /* const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4M2ZkMDQwNWJkYTAwMTUwOTE4NDEiLCJpYXQiOjE2NzA5MjIxOTIsImV4cCI6MTY3MjEzMTc5Mn0.HboxcDkCT7oe0t-xsSrEFfXdJbKvdPnGhJVNYl9t1A0",
      },
    };*/

    const res = await fetch(
      `https://hilarious-toothbrush-production.up.railway.app/users/${userId}`
    );
    const data = await res.json();
    console.log(data);
    setUserData(data);
  };

  useEffect(() => {
    if (post) {
      console.log(post.users[0]);
      getLatestPostUser(post.users[0]);
    } else {
      setUserData(post.users[0]);
    }

    setPostData(post);
  }, [post, mypost]);

  return (
    <div>
      {userData && (
        <div className="user-post">
          <UserInfo user={userData} post={postData} />
          <PostDescription post={postData} />
          <PostContent post={postData} />
          <PostStats post={postData} />
          <PostControls post={postData} />
        </div>
      )}
    </div>
  );
};

export default UserPost;
