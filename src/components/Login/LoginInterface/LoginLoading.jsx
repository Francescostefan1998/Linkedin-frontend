import "../../css/loginpage/loginpage.css";

const LoginLoading = () => {
  return (
    <div className="loading-animation">
      <div className="logo-container">
        <img
          src="https://th.bing.com/th/id/OIP.7y88DqLREW8ApbxWuMBmzgHaEo?pid=ImgDet&rs=1"
          alt="linkedinlogo"
        />
        <div className="animation-bar">
          <div className="inside-bar-blue"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginLoading;
