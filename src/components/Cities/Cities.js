import React from "react";
import City from "../City/City";
import "./Cities.css";

function Cities() {
  return (
    <div className="cities">
      <div className="cities__title">Seyahate Buradan Başlayın</div>
      <div className="cities__desc">
        Popüler şehirler için uçuş, otel ve otobüs bileti hizmetlerimize göz
        atın.
      </div>
      <div className="cities__single">
        <City imageURL="/images/istanbul.jpeg" name="İstanbul" />
        <City imageURL="/images/bodrum.jpeg" name="Bodrum" />
        <City imageURL="/images/izmir.jpeg" name="İzmir" />
        <City imageURL="/images/londra.jpeg" name="Londra" />
        <City imageURL="/images/ankara.jpeg" name="Ankara" />
        <City imageURL="/images/paris.jpeg" name="Paris" />
        <City imageURL="/images/antalya.jpeg" name="Antalya" />
        <City imageURL="/images/roma.jpeg" name="Roma" />
      </div>
    </div>
  );
}

export default Cities;
