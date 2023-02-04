import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/loginpage/logininterface.css";
import MyAccount from "./MyAccount";
import OtherAccount from "./OtherAccount";
import LoginFooter from "./LoginFooter";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../../../redux/actions";
const LoginInterface = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProfileSelection = async () => {
    await dispatch(getUserProfile("63d14dae49b19c47d1ba1938"));
    navigate("/home");
  };
  const hadleProfilePersonal = async () => {
    await dispatch(getUserProfile("63d14dae49b19c47d1ba1938"));

    navigate("/home");
  };

  return (
    <div>
      <div className="loginInterface-main">
        <div className="inner-comp-login image">
          <img
            src="https://th.bing.com/th/id/OIP.7y88DqLREW8ApbxWuMBmzgHaEo?pid=ImgDet&rs=1"
            alt="logo"
          />
        </div>
        <div className="inner-comp-login welcome">
          <div>
            <h2>Glad to see you!</h2>
          </div>
          <div>
            <p>
              Non perderti la tua prossima opportunità. Accedi per restare al
              passo con il tuo mondo professionale.
            </p>
          </div>
        </div>
        <div className="inner-comp-login table">
          <div className="cell cell1" onClick={() => hadleProfilePersonal()}>
            <MyAccount />
          </div>
          <div className="cell cell2" onClick={() => handleProfileSelection()}>
            <OtherAccount />
          </div>
        </div>
        <div className="inner-comp-login join">
          <p>
            New to LinkedIn?{" "}
            <span className="blue-text">
              <strong>Join now</strong>
            </span>
          </p>
        </div>
      </div>
      <LoginFooter />
    </div>
  );
};
export default LoginInterface;
