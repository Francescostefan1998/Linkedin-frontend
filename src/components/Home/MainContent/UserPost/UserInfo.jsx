import React, { useEffect, useState } from "react";
import "../../../css/main-content/user-post/user-info.css";
import { AiOutlineGlobal, AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { EditNewPost } from "./EditNewPost";
export const UserInfo = ({ user, post }) => {
  const navigate = useNavigate();
  console.log(user);
  const [userTitle, setUserTitle] = useState("");
  const [allow, setAllow] = useState(false);
  const randomTimeNum = Math.floor(Math.random() * 24) + 1;
  console.log(allow);
  useEffect(() => {
    if (user) {
      setUserTitle(typeof user.title === "string" ? user.title.trim() : "");
    }
  }, [user, allow]);

  return (
    <>
      <div className="user-info-top-big">
        <div className="user-info-top">
          <div className="user-info-top-left">
            <div className="user-info-top-left-image">
              <img
                src={
                  user && user.image !== undefined
                    ? user.image
                    : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                }
                alt="profile-image"
              />
            </div>
            <div>Suggested from {user.name}</div>
          </div>
          <div className="userInfo-dots">
            <BsThreeDots
              onClick={(e) => {
                allow === false ? setAllow(true) : setAllow(false);
              }}
            />
          </div>
        </div>
        <hr />
        {allow && (
          <EditNewPost
            post={post}
            user={user}
            className="absolute-Positioning"
          />
        )}
      </div>

      {user ? (
        <div className="user-info">
          <div className="img-container">
            <img
              onClick={() => navigate(`/profile/${user._id}`)}
              src={
                user.image
                  ? user.image
                  : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              }
              alt=""
            />
          </div>

          <div className="user-details">
            <span
              className="user-name"
              onClick={() => navigate(`/profile/${user._id}`)}
            >{`${user.name} ${user.surname}`}</span>
            <span className="user-title">{userTitle}</span>
            <span className="time-passed">
              <span>{randomTimeNum === 24 ? "1d" : `${randomTimeNum}h`}</span>
              <div className="dot" />
              <AiOutlineGlobal style={{ fontSize: "15px" }} />
            </span>
          </div>
          <a className="follow-btn">
            <AiOutlinePlus className="plus-icon" style={{ fontSize: "18px" }} />
            Follow
          </a>
        </div>
      ) : null}
    </>
  );
};
