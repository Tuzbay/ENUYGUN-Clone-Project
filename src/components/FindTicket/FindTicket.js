import React, { useState } from "react";
import "./FindTicket.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

function FindTicket() {
  const [option, setOption] = useState("fligtTicket");

  return (
    <div className="findTicket">
      <div className="findTicket__options">
        <ul className="findTicket__options-list">
          <li
            className={
              option === "fligtTicket"
                ? "findTicket__options-list-item active"
                : "findTicket__options-list-item "
            }
            onClick={() => setOption("fligtTicket")}
          >
            Uçak Bileti
          </li>
          <li
            className={
              option === "Otel"
                ? "findTicket__options-list-item active"
                : "findTicket__options-list-item"
            }
            onClick={() => setOption("Otel")}
          >
            Otel
          </li>
          <li
            className={
              option === "BusTicket"
                ? "findTicket__options-list-item active"
                : "findTicket__options-list-item"
            }
            onClick={() => setOption("BusTicket")}
          >
            Otobüs Bileti
          </li>
          <li
            className={
              option === "PNR"
                ? "findTicket__options-list-item active"
                : "findTicket__options-list-item"
            }
            onClick={() => setOption("PNR")}
          >
            PNR Sorgulama
          </li>
          <li
            className={
              option === "CancelTicket"
                ? "findTicket__options-list-item active"
                : "findTicket__options-list-item"
            }
            onClick={() => setOption("CancelTicket")}
          >
            Bilet İptal
          </li>
        </ul>
      </div>
      {option === "fligtTicket" && (
        <div className="findTicket__desc">
          <div className="findTicket__desc-top">
            <div className="findTicket__desc-top-item">
              <label>Nereden</label>
              <input type="text" placeholder="Şehir veya Havalimanı Yazın" />
            </div>
            <div className="findTicket__desc-top-item">
              <label>Nereye</label>
              <input type="text" placeholder="Şehir veya Havalimanı Yazın" />
              {/* <LocationOnIcon className="location" /> */}
            </div>
          </div>
          <div className="findTicket__desc-middle">
            <div className="findTicket__desc-top-item">
              <label>Gidiş Tarihi</label>
              <input type="text" placeholder="10 Mar 2023, Cum" />
            </div>
            <div className="findTicket__desc-top-item">
              <label>Dönüş Tarihi</label>
              <input type="text" placeholder="Tek Yön" />
            </div>
          </div>
          <div className="findTicket__desc-bottom">
            <div className="findTicket__desc-top-item">
              <label>Aktarmasız</label>
              <input type="text" placeholder="1 Yolcu / Ekonomi" />
            </div>
            <div className="findTicket__desc-top-item">
              <button className="cheap-button">
                Ucuz bilet bul
                <span>
                  <KeyboardArrowRightIcon />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {option === "Otel" && (
        <div className="otel__wrapper">
          <div className="otel__wrapper-top">
            <input
              className="otel__input"
              placeholder="Şehir, ilçe, tema, otel adı ara"
            />
            <input
              className="otel__input"
              placeholder="Giriş ve çıkış tarihini seçin"
            />
          </div>

          <div className="otel__wrapper-bottom">
            <input className="otel__input" placeholder="2 Yetişkin" />
            <button>Otel Bul</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FindTicket;
