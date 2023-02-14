import "../../css/loginpage/editUserNameLogin.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
const EditUserNameLogin = (props) => {
  const [close, setClose] = useState(false);

  const navigate = useNavigate();
  function handleClick() {
    props.handleProfileSelection();
  }
  return (
    <div className="editUserNameLogin-biggest">
      <div id="editUserNameLogin-main"></div>
      <div id="editUserNameLogin-main-interface">
        <div
          className="editUserNameLogin-inner-component close"
          onClick={handleClick}
        >
          <GrFormClose />
        </div>

        <div className="editUserNameLogin-inner-component username">
          <div>
            <h5>Username</h5>
          </div>
          <div className="editUserNameLogin-inner-component-username-input">
            <input placeholder="Username or email" type="text" />
          </div>
        </div>
        <div className="editUserNameLogin-inner-component password">
          <div>
            <h5>Password</h5>
          </div>
          <div className="editUserNameLogin-inner-component-password-input">
            <input placeholder="password" type="password" />
          </div>
        </div>
        <div className="editUserNameLogin-inner-component confirm">confirm</div>
      </div>
    </div>
  );
};

export default EditUserNameLogin;
