import React, { useEffect, useState } from "react";
import "./stylings/HomePage.css"

import car from "./images/car4.jpg";

function FetchRequest() {
  return (
    <>
      <h1> The App is Listening Successfull On Ec2 instance Congrats ...</h1>
      <img src={car} alt="" />
    </>
  );
}

export default FetchRequest;
