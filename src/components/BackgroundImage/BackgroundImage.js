import React from "react";
// import FindTicket from "../FindTicket/FindTicket";
import "./BackgroundImage.css";
// import Slider from "../Slider/Slider";

function BackgroundImage() {
  return (
    <div className="backgroundImage">
      <img src="/images/45196.jpeg" alt="" />
      <div className="frontPart">
        <div className="frontPart__left">{/* <FindTicket /> */}</div>
        <div className="frontPart__right">{/* <Slider /> */}</div>
      </div>
    </div>
  );
}

export default BackgroundImage;
