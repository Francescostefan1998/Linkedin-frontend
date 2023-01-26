import React, { useState } from "react";
import "../../../css/main-content/start-post/new-post.css";
import { BsX } from "react-icons/bs";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsEmojiSmile, BsFillPlayBtnFill } from "react-icons/bs";
import { BiImage, BiDotsHorizontalRounded, BiWorld } from "react-icons/bi";
import { HiDocumentText } from "react-icons/hi";
import { MdOutlineWatchLater } from "react-icons/md";
import { Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import axios from "axios";

export const NewPost = ({ user, handleClose, show }) => {
  console.log(user);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState({
    username: "d",
    likes: [],
    comments: [],
    text: "m",
    image: "jj",
    users: "",
  });

  const handleChange = (value, fieldToSet) => {
    setNewPost({
      ...newPost,
      users: user._id,
      [fieldToSet]: value,
    });
  };

  const submitHandler = async () => {
    if (newPost.text) {
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(newPost),
      };

      const res = await fetch(
        "https://hilarious-toothbrush-production.up.railway.app/posts",
        options
      );
      console.log("before Id");
      const { _id } = await res.json();
      console.log(_id);
      console.log("after Id");

      try {
        if (_id) {
          submitImage(image, _id);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  async function submitImage(image, id) {
    const formData = new FormData();
    formData.append("image", image);
    console.log("Upload triggered");
    try {
      const response = await axios.post(
        `https://hilarious-toothbrush-production.up.railway.app/posts/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      {console.log(newPost)}
      <div className="new-post">
        <div className="creating-post">
          <p>Create Post</p>
          <div className="icon-container" onClick={handleClose}>
            <BsX className="icon-x" />
          </div>
        </div>
        {user ? (
          <div className="profile-info">
            <img src={user.image} alt="photo_profile" />
            <div className="name">
              <p>
                {user.name} {user.surname}
              </p>

              <button className="can-see">
                <BiWorld className="icon-wold" />
                Anyone
                <AiOutlineCaretDown className="icon-wold" />
              </button>
            </div>
          </div>
        ) : null}
        <div className="talk-about">
          <Form.Control
            id="input"
            as="textarea"
            rows={3}
            placeholder="What do you want to talk about?"
            onChange={(e) => handleChange(e.target.value, "text")}
          />
          <Form.Control
            className="file-input"
            type="file"
            placeholder="What do you want to talk about?"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="hashtag d-flex">
          <div className="moji">
            <BsEmojiSmile className="emoji" />
          </div>
          <a href="#" className="add-hashtag">
            <span>Add hashtag</span>
          </a>
        </div>
        <div className="add-to-your-post d-flex">
          <div className="extra">
            <div className="icon-container">
              <BiImage className="extra-icons-post" />
            </div>
            <div className="icon-container">
              <BsFillPlayBtnFill className="extra-icons-post" />
            </div>
            <div className="icon-container">
              <HiDocumentText className="extra-icons-post" />
            </div>
            <div className="icon-container">
              <BiDotsHorizontalRounded className="extra-icons-post" />
            </div>
          </div>

          <div className="submiting">
            <div className="icon-container">
              <MdOutlineWatchLater className="extra-icons-post" />
            </div>
            <button onClick={submitHandler}>Post</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
