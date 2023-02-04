import { useState } from "react";
import { useEffect } from "react";
import "../../css/loginpage/myaccount.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
const MyAccount = () => {
  const [select, setSelect] = useState("notSelected");
  const [user, setUser] = useState(null);
  console.log(user);
  const fetchMyAccount = async () => {
    const res = await fetch(
      "https://hilarious-toothbrush-production.up.railway.app/users/63d14dae49b19c47d1ba1938"
    );
    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    fetchMyAccount();
  }, []);

  return (
    <div className="myAccount-main">
      {user && (
        <div className="myAccount-main">
          <div className="myAccount-leftSide">
            <div className="myAccount-image">
              <img src={user.image} alt="image" />
            </div>
            <div>
              <div>
                <h5>
                  {user.name} {user.surname}
                </h5>
              </div>
              <div>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
          <div className="myAccount-rightSide">
            <div>
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
