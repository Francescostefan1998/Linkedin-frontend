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
import MessageBarMobile from "./components/MessageBar/MessageBarMobile";
import { useLocation } from "react-router-dom";
import MessageBartextAreaMobile from "./components/MessageBar/MessageBartextAreaMobile";
function AppWrapper() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/message" &&
        location.pathname !== "/textarea" && <NavBar />}
      {/* ... rest of your code ... */}
    </>
  );
}
function MessageWrapper() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/message" &&
        location.pathname !== "/textarea" && (
          <MessageBar myclass={"smallSize"} bigSize={"small"} />
        )}
    </>
  );
}
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  return (
    <BrowserRouter>
      <AppWrapper />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile otherProfile={false} />} />
        <Route path="/profile/:id" element={<Profile otherProfile={true} />} />
        <Route path="/profile/experiences" element={<EditExperiences />} />
        <Route path="/message" element={<MessageBarMobile />} />
        <Route path="/textarea" element={<MessageBartextAreaMobile />} />
      </Routes>
      <MessageWrapper />
    </BrowserRouter>
  );
}

export default App;
