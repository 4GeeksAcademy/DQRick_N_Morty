import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Characters } from "../component/characters.js";
import { Locations } from "../component/locations.js";
import { Episodes } from "../component/episodes";

export const Home = () => {
  return (
    <div className="text-center">
      <Characters />
      <Locations />
      <Episodes />
    </div>
  );
};
