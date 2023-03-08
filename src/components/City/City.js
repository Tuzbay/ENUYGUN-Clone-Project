import React from "react";
import "./City.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function City({ imageURL, name }) {
  return (
    <div className="city">
      <div className="city__left">
        <img src={imageURL} alt={name} />
      </div>
      <div className="city__right">
        <div className="city__right-top">
          <h3>{name}</h3>
          <div className="city__right-topr">
            <p>Gezilecek Yerler</p>
            <span>
              <KeyboardArrowRightIcon />
            </span>
          </div>
        </div>
        <div className="city__right-bottom">
          <span>Uçak</span>
          <span>Otobüs</span>
          <span>Otel</span>
          <span>Araç</span>
        </div>
      </div>
    </div>
  );
}

export default City;
