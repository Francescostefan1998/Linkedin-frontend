import "../css/messagebar/messageNavbar.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdModeEdit } from "react-icons/md";
const MessageNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="messageNavbar">
      <div className="messageNavbar-comp">
        <div
          className="messageNavbar-innerComponent  back"
          onClick={(e) => navigate("/home")}
        >
          <AiOutlineArrowLeft />
        </div>
        <div className="messageNavbar-innerComponent">
          <h4>Messaging</h4>
        </div>
      </div>
      <div className="messageNavbar-comp over">
        <div className="messageNavbar-innerComponent">
          <BiDotsHorizontalRounded />
        </div>
        <div
          className="messageNavbar-innerComponent"
          onClick={(e) => navigate("/textarea")}
        >
          <MdModeEdit />
        </div>
      </div>
    </div>
  );
};

export default MessageNavbar;
