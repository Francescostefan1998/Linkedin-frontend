import React from "react";
import "../css/messagebar/messagebar.css";
import MessageBar from "./MessageBar";
import { useState } from "react";
import MessageNavbar from "./MessageNavbar";

const MessageBarMobile = () => {
  const [fullSize, setFullSixe] = useState("fullSize");
  return (
    <div>
      <MessageNavbar />

      <MessageBar myclass={fullSize} bigSize={"bigSize"} />
    </div>
  );
};

export default MessageBarMobile;
