import React from "react";
import { RxDotsHorizontal } from "react-icons/rx";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { newTextArea } from "../../redux/actions";
import newChatReducer from "../../redux/reducers/NewChatReducer";
const SingleChat = ({ chatsingle }) => {
  return (
    <div>
      {chatsingle.name !== "" ? (
        <div className="messageBarFlex singleChat">
          <div className="chatImage">
            <img
              src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0"
              alt="image"
            />
          </div>
          <div className="chatContent">
            <div className="messageBarFlex-chat">
              <div>
                {chatsingle && <h6 className="mb-1 mt-2">{chatsingle.name}</h6>}
              </div>
              <div className="date">date</div>
              <div className="none">
                <RxDotsHorizontal />
              </div>
            </div>
            {chatsingle && <p>You: {chatsingle.text}</p>}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SingleChat;
