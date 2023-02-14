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
        <div
          id={props.none}
          className="editUserNameLogin-inner-component password"
        >
          <div>
            <h5>Confirm password</h5>
          </div>
          <div className="editUserNameLogin-inner-component-password-input">
            <input placeholder="password" type="password" />
          </div>
        </div>
        <div className="editUserNameLogin-inner-component confirm mt-3 mb-3">
          confirm
        </div>
        <div
          id={props.none}
          className="editUserNameLogin-inner-component password mb-3"
        >
          <div></div>
          <button className="editUserNameLogin-inner-component-button">
            <img
              src="https://images.novatech.co.uk/website2015/images/checkout/google-logo.png"
              alt="f"
            />
            log in with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserNameLogin;
