import "../../css/loginpage/loginpage.css";
import { useState } from "react";
import { useEffect } from "react";
import LoginInterface from "./LoginInterface";
const LoginLoading = () => {
  const [timeout, setTime] = useState("sliding");
  useEffect(() => {
    setTimeout(() => {
      setTime("expired");
    }, 3000);
  }, []);
  return (
    <div className="loading-animation">
      {timeout === "sliding" ? (
        <div className="logo-container">
          <img
            src="https://th.bing.com/th/id/OIP.7y88DqLREW8ApbxWuMBmzgHaEo?pid=ImgDet&rs=1"
            alt="linkedinlogo"
          />
          <div className="animation-bar">
            <div className="inside-bar-blue"></div>
          </div>
        </div>
      ) : (
        <div>
          <LoginInterface />
        </div>
      )}
    </div>
  );
};

export default LoginLoading;
