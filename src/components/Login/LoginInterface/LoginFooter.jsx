import "../../css/loginpage/logininterface.css";
import { RiArrowDropDownLine } from "react-icons/ri";
const LoginFooter = () => {
  return (
    <div className="login-footer">
      <div className="login-footer-component logo login-footer-stay">
        <div>
          <img
            src="https://seeklogo.com/images/L/linkedin-black-logo-332E0BC19E-seeklogo.com.png"
            alt="black-logo"
          />
        </div>
        <p>©2023</p>
      </div>
      <div className="login-footer-component">
        <p>Contract license</p>
      </div>
      <div className="login-footer-component">
        <p>Privacy information</p>
      </div>
      <div className="login-footer-component">
        <p>Comunity information</p>
      </div>
      <div className="login-footer-component">
        <p>Cookies information</p>
      </div>
      <div className="login-footer-component">
        <p>Copyright information</p>
      </div>
      <div className="login-footer-component">
        <p>Send comments</p>
      </div>
      <div className="login-footer-component">
        <p>
          Lenguage
          <RiArrowDropDownLine className="icon" />
        </p>
      </div>
    </div>
  );
};

export default LoginFooter;
