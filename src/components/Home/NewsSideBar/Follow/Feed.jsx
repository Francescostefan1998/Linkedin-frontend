import React from "react";
import "../../../css/news-side-bar/follow/feed.css";
import { BsPlus } from "react-icons/bs";

export const Feed = ({ name, description, imagen }) => {
  return (
    <div className="feed">
      <div className="body">
        <a href="https://www.google.pl/">
          <img src={imagen} alt="forbes_logo" />
        </a>
        <div>
          <div className="btn-section">
            <a href="https://www.google.pl/">
              <p>{name}</p>
              <p className="gray">{description}</p>
            </a>
            <div className="button">
              <button>
                <BsPlus className="plus" /> Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
