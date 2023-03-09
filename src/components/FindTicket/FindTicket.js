import React from "react";
import "./FindTicket.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function FindTicket() {
  return (
    <div className="findTicket">
      <div className="findTicket__options">
        <ul className="findTicket__options-list">
          <li className="findTicket__options-list-item active">Uçak Bileti</li>
          <li className="findTicket__options-list-item">Otel</li>
          <li className="findTicket__options-list-item">Otobüs Bileti</li>
          <li className="findTicket__options-list-item">PNR Sorgulama</li>
          <li className="findTicket__options-list-item">Bilet İptal</li>
        </ul>
      </div>
      <div className="findTicket__desc">
        <div className="findTicket__desc-top">
          <div className="findTicket__desc-top-item">
            <label>Nereden</label>
            <input type="text" placeholder="Şehir veya Havalimanı Yazın" />
          </div>
          <div className="findTicket__desc-top-item">
            <label>Nereye</label>
            <input type="text" placeholder="Şehir veya Havalimanı Yazın" />
            <LocationOnIcon className="location" />
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
    </div>
  );
}

export default FindTicket;
