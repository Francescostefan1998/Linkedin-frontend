import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Home/Homepage";
import { NavBar } from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";

import { getUserProfile } from "./redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { EditExperiences } from "./components/Experiences/EditExperiences";
import MessageBar from "./components/MessageBar/MessageBar";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile otherProfile={false}/>} />
        <Route path="/profile/:id" element={<Profile otherProfile={true}/>} />
        <Route path="/profile/experiences" element={<EditExperiences />} />
      </Routes>
      <MessageBar />
    </BrowserRouter>
  );
}

export default App;
