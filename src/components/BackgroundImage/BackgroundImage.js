import React from "react";
// import FindTicket from "../FindTicket/FindTicket";
import "./BackgroundImage.css";
import Total from "./Total";
// import Slider from "../Slider/Slider";

function BackgroundImage() {
  return (
    <div className="backgroundImage">
      <img src="/images/45196.jpeg" alt="" />
      <Total />
      {/* <div className="frontDeneme">
        <div className="left">
          <FindTicket />
        </div>
        <div className="right">
          <Slider />
        </div>
      </div> */}
    </div>
  );
}

export default BackgroundImage;
