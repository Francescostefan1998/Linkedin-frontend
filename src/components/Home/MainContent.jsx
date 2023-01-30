import React, { useState, useEffect } from "react";
import "../css/main-content/main-content.css";
import { ProfileInfo } from "./LeftSideBar/ProfileInfo";
import JobSearch from "./MainContent/JobSearch";
import { ProfileTop } from "./MainContent/ProfileTop/ProfileTop";
import { StartPost } from "./MainContent/StartPost";
import UserPost from "./MainContent/UserPost";
import { useSelector } from "react-redux";

export const MainContent = () => {
  const [posts, setPosts] = useState([]);
  const { post: mypost } = useSelector((state) => state.post);

  const { latestPost: latestPostId } = useSelector((state) => state.user);
  const [latestPost, setLatestPost] = useState(null);
  console.log(posts);
  const getRandomPosts = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  };

  const getLatestPost = async (postId) => {
    /*const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4M2ZkMDQwNWJkYTAwMTUwOTE4NDEiLCJpYXQiOjE2NzA5MjIxOTIsImV4cCI6MTY3MjEzMTc5Mn0.HboxcDkCT7oe0t-xsSrEFfXdJbKvdPnGhJVNYl9t1A0",
      },
    };*/

    const res = await fetch(
      `https://hilarious-toothbrush-production.up.railway.app/posts/${postId}`
    );
    const data = await res.json();
    setLatestPost(data);
  };

  const getPosts = async () => {
    /*const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4M2ZkMDQwNWJkYTAwMTUwOTE4NDEiLCJpYXQiOjE2NzA5MjIxOTIsImV4cCI6MTY3MjEzMTc5Mn0.HboxcDkCT7oe0t-xsSrEFfXdJbKvdPnGhJVNYl9t1A0",
      },
    };*/
    const res = await fetch(
      "https://hilarious-toothbrush-production.up.railway.app/posts/"
    );
    const postsArr = await res.json();
    console.log(postsArr);
    console.log("fetchposttriggered");
    //const randomPosts = getRandomPosts(postsArr, 20);
    setPosts(postsArr.reverse());
  };

  useEffect(() => {
    getPosts();
    //getLatestPost(latestPostId);
  }, [latestPostId, mypost]);

  /*useEffect(() => {
  }, [latestPostId]);*/

  return (
    <div className="main-content">
      <ProfileTop />
      <JobSearch />
      <StartPost />
      {latestPost ? <UserPost key={latestPost._id} post={latestPost} /> : null}
      {posts.length > 1 ? (
        posts.map((post) =>
          post.image !== undefined && post.users ? (
            <UserPost key={post._id} post={post} />
          ) : (
            <div></div>
          )
        )
      ) : (
        <div></div>
      )}
    </div>
  );
};
