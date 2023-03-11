import React from "react";
import "./Slider.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Slider() {
  return (
    <div className="slider">
      <h1>Uçak Biletin Cebinde</h1>
      <hr />
      <p>
        Enuygun mobil uygulaması ile uçak bileti almak çok hızlı! Mobil
        uygulamayı indir, binlerce uçuşu saniyeler içinde karşılaştır, sana en
        uygun uçuşu kolayca al!
      </p>
      <div className="slider__bottom">
        <KeyboardArrowLeftIcon />
        <span className="circle fill"></span>
        <span className="circle" onClick={() => {}}></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <KeyboardArrowRightIcon />
      </div>
    </div>
  );
}

export default Slider;
