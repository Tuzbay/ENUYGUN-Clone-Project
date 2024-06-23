import React from "react";
import FindTicket from "../FindTicket/FindTicket";
import Slider from "../Slider/Slider";
import "./Total.css";

function Total() {
  return (
    <div className="total">
      <FindTicket />
      <Slider />
    </div>
  );
}

export default Total;
