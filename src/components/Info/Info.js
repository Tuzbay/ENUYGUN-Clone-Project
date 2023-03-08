import React from "react";
import "./Info.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Info() {
  return (
    <div className="info">
      <div className="info__left">
        <h1>Türkiye'nin Seyahat Sitesi</h1>
        <div className="count">17.000.000+</div>
        <div className="visiter">Aylık Ziyaretçi</div>
      </div>
      <div className="info__middle">
        <img src="/images/call-center-new.png" alt="" />
        <img src="/images/ticket-cancel-new.png" alt="" />
        <img src="/images/price-alert-new.png" alt="" />
      </div>
      <div className="info__right">
        <p className="p-gray">KLİŞE HEDİYELERDEN SIKILANLARA</p>
        <p className="p-orange">ENUYGUN HEDİYE KART</p>
        <button className="btn-sendNow">
          HEMEN GÖNDER
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
}

export default Info;
