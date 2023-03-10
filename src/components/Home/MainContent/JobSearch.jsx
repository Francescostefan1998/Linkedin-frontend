import React from "react";
import "../../css/main-content/job-search.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserProfile } from "../../../redux/actions";
const JobSearch = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile(user._id));
  }, []);
  return (
    <div className="job-search">
      <img
        className="img"
        src="https://media.licdn.com/media/AAYQAgSuAAgAAQAAAAAAABlvNp5yzndgSdCsu3q6Pw22qA.png"
      />
      <h5 className="heading">Hi, are you looking for a job right now?</h5>
      <p className="text">
        We can help you prepare for your search. Your response is private to
        you.
      </p>
      <div className="btns-container">
        <a className="btn" href="#">
          Yes
        </a>
        <a className="btn" href="#">
          No
        </a>
      </div>
    </div>
  );
};

export default JobSearch;
