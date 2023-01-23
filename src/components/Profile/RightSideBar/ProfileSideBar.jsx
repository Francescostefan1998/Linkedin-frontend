import React from "react";
import { JustAnAd } from "./ProfileSideBar/JustAnAd";
import { Options } from "./ProfileSideBar/Options";
import { People } from "./ProfileSideBar/People";

export const ProfileSideBar = () => {
  return (
    <div>
      <Options />
      <JustAnAd />
      <People />
    </div>
  );
};
