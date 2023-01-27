import React from "react";
import "../../../css/profile/pictureUploader/pictureUploader.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import newChatReducer from "../../../../redux/reducers/NewChatReducer";
import { useEffect } from "react";
import axios from "axios";
export default function EditUserProfileImage({ user }) {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [helper, setHelper] = useState("");
  console.log(user);

  async function uploadImage() {
    const formData = new FormData();
    formData.append("image", image);
    console.log("Upload triggered");
    try {
      const response = await axios.post(
        `https://hilarious-toothbrush-production.up.railway.app/users/${user._id}/picture`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.ok) {
        alert("Image uploaded successfully");
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="file-uploader" >
      <div className="file-uploader__message-area">
        <p> New Picture Upload</p>
      </div>
      {user._id && (
        <div className="file-chooser">
          <input
            className="file-chooser__input"
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
      )}
      <input
        className="file-uploader__submit-button"
        onClick={uploadImage}
        type="submit"
        value="Upload"
      />
     <hr/>
    </div>
  );
}

// return (
//   <div className="pictureUploader">
//     <h5>Picture Uploader</h5>
//     {user._id && (
//       <div>
//         <input
//           type="file"
//           onChange={(e) => {
//             setImage(e.target.files[0]);
//           }}
//         />
//         <br />

//         <hr />
//         <button onClick={uploadImage}>Upload</button>
//       </div>
//     )}
//   </div>
// );
