import React from "react";
import "./Brand.css";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

function Brand() {
  return (
    <div className="brand">
      <div className="brandSingle">
        <div className="brandSingle__box">
          <span>
            <BusinessCenterIcon />
          </span>
          <p>Hediye Kart Gönder</p>
        </div>
      </div>
      <div className="brandSingle">
        <div className="brandSingle__box">
          <span>EN</span>
          <p>Kart Puanlarımı ENCoin'e Çevir</p>
        </div>
      </div>
      <div className="brandSingle">
        <div className="brandSingle__box">
          <span>
            <BusinessCenterIcon />
          </span>
          <p>Biletimi İptal Et</p>
        </div>
      </div>
      <div className="brandSingle">
        <div className="brandSingle__box">
          <span>
            <BusinessCenterIcon />
          </span>
          <p>Online Check-in</p>
        </div>
      </div>
      <div className="brandSingle">
        <div className="brandSingle__box">
          <span>PNR</span>
          <p>PNR Sorgulama</p>
        </div>
      </div>
      <div className="brandSingle">
        <div className="brandSingle__box">
          <span>
            <BusinessCenterIcon />
          </span>
          <p>Kurumsal Üye Ol</p>
        </div>
      </div>
    </div>
  );
}

export default Brand;
