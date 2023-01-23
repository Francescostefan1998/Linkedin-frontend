import React from "react";
import "../css/profile/Experience/edit-experience.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Experience } from "../Profile/MainContent/Experience/Experience";
import { Container } from "react-bootstrap";

export const EditExperiences = () => {
  const { user } = useSelector((state) => state.user);
  const [experiences, setExperiences] = useState([]);

  const getExperiences = async () => {
    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4M2ZkMDQwNWJkYTAwMTUwOTE4NDEiLCJpYXQiOjE2NzA5MjIxOTIsImV4cCI6MTY3MjEzMTc5Mn0.HboxcDkCT7oe0t-xsSrEFfXdJbKvdPnGhJVNYl9t1A0",
      },
    };
    if (user) {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${user._id}/experiences`,
        options
      );
      const data = await res.json();
      setExperiences(data);
    }
  };

  useEffect(() => {
    getExperiences();
  }, [user]);

  return (
    <Container className="pb-5">
      <div className="edit-experiences">
          <h3 className="mb-5">Edit Experiences</h3>
        {experiences.map((exp) => (
          <Experience
            key={exp._id}
            experience={exp}
            canEdit={true}
            refreshExperiences={getExperiences}
          />
        ))}
      </div>
    </Container>
  );
};
