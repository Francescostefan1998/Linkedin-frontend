import { useState } from "react";
import { useEffect } from "react";
import "../../css/loginpage/myaccount.css";
const OtherAccount = () => {
  return (
    <div className="myAccount-main">
      <div className="myAccount-main">
        <div className="myAccount-leftSide other">
          <div className="myAccount-image">
            <img
              src="https://th.bing.com/th/id/R.018fdbf00d67f32a9ebd804add2573c2?rik=zaKROXFdqr%2fqVA&riu=http%3a%2f%2fwww.caribbeangamezone.com%2fwp-content%2fuploads%2f2018%2f03%2favatar-placeholder.png&ehk=tdznBvU%2bCJ0xW0CofPO8CASu4UGxugfYPeT8v%2f0xX1E%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
              alt="image"
            />
          </div>
          <div>
            <div>
              <h5>Login using another account</h5>
            </div>
          </div>
        </div>
        <div className="myAccount-rightSide"></div>
      </div>
    </div>
  );
};

export default OtherAccount;
