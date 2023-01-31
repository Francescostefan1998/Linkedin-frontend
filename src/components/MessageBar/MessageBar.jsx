import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../css/messagebar/messagebar.css";
import { RxDotsHorizontal } from "react-icons/rx";
import { TfiPencilAlt } from "react-icons/tfi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFilterLeft } from "react-icons/bs";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import MessageTextArea from "./MessageTextArea";
import { getUserProfile } from "../../redux/actions";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SingleChat from "./SingleChat";
import { AiFillWechat } from "react-icons/ai";
import { newTextArea } from "../../redux/actions";
import newChatReducer from "../../redux/reducers/NewChatReducer";
const MessageBar = ({ myclass }) => {
  const [arrow, setArrow] = useState("off");
  const [write, setWrite] = useState("off");
  const { user } = useSelector((state) => state.user);
  const allChat = useSelector((store) => store.newChat.chatuser);
  console.log(allChat);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, []);
  return (
    <div className="myMessageBar">
      <div
        id={arrow !== "off" ? "messageBar" : "messageBar1"}
        className={myclass}
      >
        <div className="messageBarFlex" id="messageBarTitle">
          <div className="messageBarFlex">
            <div id="messageBarImage">
              {user && <img src={user.image} alt="image" />}
            </div>
            <div>
              <h5>Message</h5>
            </div>
          </div>
          <div className="messageBarFlex" id="icons">
            <div className="icon">
              <RxDotsHorizontal />
            </div>
            <div className="icon">
              <TfiPencilAlt
                onClick={(e) => {
                  write !== "off" ? setWrite("off") : setWrite("on");
                }}
              />
            </div>
            <div
              className="icon"
              onClick={(e) => {
                arrow !== "on" ? setArrow("on") : setArrow("off");
              }}
            >
              {arrow !== "on" ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
            </div>
          </div>
        </div>
        <div id="messageBarMain">
          <div id="messageBarSearch" className="messageBarFlex">
            <div className="messageBarFlex">
              <div className="icon">
                <BiSearchAlt2 />
              </div>
              <div>
                <input type="search" placeholder="Search message" />
              </div>
            </div>
            <div className="messageBarFlex">
              <BsFilterLeft />
            </div>
          </div>
          <div id="scroll-messageBar">
            {allChat.map((object, i) => (
              <SingleChat chatsingle={object} key={i} />
            ))}
          </div>
        </div>
        {write !== "off" ? (
          <MessageTextArea setWrite={setWrite} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default MessageBar;
