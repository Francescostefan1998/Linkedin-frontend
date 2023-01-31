import React from "react";
import "../css/messagebar/messagebar.css";
import MessageBar from "./MessageBar";
import { useState } from "react";

const MessageBarMobile = () => {
  const [fullSize, setFullSixe] = useState("fullSize");
  return (
    <div>
      <MessageBar myclass={fullSize} bigSize={"bigSize"} />
    </div>
  );
};

export default MessageBarMobile;
