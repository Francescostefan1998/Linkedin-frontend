import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

export const EditNewPost = ({ post, user }) => {
  console.log(post);
  /*text:{type:String, required:true},
         username:{type:String, required:true},
         image:{type:String, required:true},
         users: [{ type: Schema.Types.ObjectId, ref: "User" }],*/

  const [newExperience, setNewExperience] = useState({
    text: post.text,
    username: post.username,
    image: post.image,
    likes: post.likes,
    comments: post.comments,
  });
  const [myimage, setMyImage] = useState();
  console.log(myimage);

  const handleChange = (value, fieldToSet) => {
    setNewExperience({
      ...newExperience,
      [fieldToSet]: value,
    });
  };

  async function uploadImage(image, mynewId) {
    const formData = new FormData();
    formData.append("image", image);
    console.log("Upload triggered");
    try {
      const response = await axios.post(
        `https://hilarious-toothbrush-production.up.railway.app/posts/${post._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExperience),
    };

    const res = await fetch(
      `https://hilarious-toothbrush-production.up.railway.app/posts/${post._id}`,
      options
    );
    if (res.ok) {
      window.alert("Post edited successfully!");
    }
    await uploadImage(myimage);
  };
  const deleteProduct = async () => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(
      `https://hilarious-toothbrush-production.up.railway.app/posts/${post._id}`,
      options
    );
    if (res.ok) {
      window.alert("Post deleted successfully!");
    }
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          autoFocus
          required
          onChange={(e) => handleChange(e.target.value, "text")}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Picture</Form.Label>
        <Form.Control
          className="file-input"
          type="file"
          placeholder="What do you want to talk about?"
          onChange={(e) => setMyImage(e.target.files[0])}
        />
      </Form.Group>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="danger" onClick={(e) => deleteProduct()}>
          Delete product
        </Button>
      </div>
    </Form>
  );
};
