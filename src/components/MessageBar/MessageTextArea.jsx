import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../css/messagebar/messageTextArea.css";
import { RxDotsHorizontal } from "react-icons/rx";
import { TfiPencilAlt } from "react-icons/tfi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFilterLeft } from "react-icons/bs";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { ImDisplay } from "react-icons/im";
import { AiOutlinePaperClip } from "react-icons/ai";
import { MdGif } from "react-icons/md";
import { BiSmile } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { BsArrowsAngleContract } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { newTextArea } from "../../redux/actions";
const MessageTextArea = ({ setWrite }) => {
  const [arrow, setArrow] = useState("off");
  const [littlearrow, setLittleArrow] = useState("off");
  const [focusText, setFocusText] = useState("off");
  const [newchat, setNewChat] = useState(null);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [time, setTime] = useState("");

  const dispatch = useDispatch();
  const object = {
    name: name,
    image: image,
    text: text,
    time: time,
  };
  useEffect(() => {
    dispatch(newTextArea(object));
  }, []);
  console.log(name);
  return (
    <div id={arrow !== "off" ? "messageTextArea1" : "messageTextArea"}>
      <div className="texAreaFlex tex-justify p-3 pt-2 pb-2">
        <div>
          <h6>New message</h6>
        </div>
        <div className="texAreaFlex">
          <div
            className="icon"
            onClick={(e) => {
              arrow !== "on" ? setArrow("on") : setArrow("off");
            }}
          >
            {arrow !== "on" ? (
              <BsArrowsAngleExpand />
            ) : (
              <BsArrowsAngleContract />
            )}
          </div>
          <div className="icon" onClick={(e) => setWrite("off")}>
            <RxCross1 />
          </div>
        </div>
      </div>
      <div className="texAreaFlex bortop  p-3 pt-2 pb-2">
        <input
          id="input"
          type="text"
          placeholder="Digit here a name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div
        className="white-space"
        id={littlearrow !== "off" ? "flex-2" : "flex-3"}
      ></div>
      <div id="specialBarAnimation">
        <div
          id={focusText !== "off" ? "specialBarAnimationInside" : "null"}
        ></div>
      </div>
      <div
        className="texAreaFlex tex-justify  p-3 pt-2 pb-2"
        id={littlearrow !== "off" ? "flex-1" : "flex-0"}
      >
        <div id="textAreaSpace">
          <textarea
            onMouseEnter={(e) => setFocusText("on")}
            placeholder="Write a message..."
            id="text-area-big"
            onMouseLeave={(e) => setFocusText("off")}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div
          className="icon"
          onClick={(e) => {
            littlearrow !== "off"
              ? setLittleArrow("off")
              : setLittleArrow("on");
          }}
        >
          {littlearrow !== "off" ? (
            <MdKeyboardArrowUp />
          ) : (
            <MdKeyboardArrowDown />
          )}
        </div>
      </div>
      <div className="texAreaFlex tex-justify bortop  p-3 pt-2 pb-2">
        <div className="texAreaFlex">
          <div className="icon">
            <ImDisplay />
          </div>
          <div className="icon">
            <AiOutlinePaperClip />
          </div>
          <div className="icon">
            <MdGif />
          </div>
          <div className="icon">
            <BiSmile />
          </div>
        </div>
        <div className="texAreaFlex ">
          <div>
            <input
              id="sendThis"
              type="submit"
              placeholder="Send"
              onClick={(e) => {
                name !== "" ? dispatch(newTextArea(object)) : dispatch();
              }}
            />
          </div>
          <div className="icon">
            <RxDotsHorizontal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageTextArea;
