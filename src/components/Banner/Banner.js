import React from "react";
import "./Banner.css";
import DownloadIcon from "@mui/icons-material/Download";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__left">
        <h1>10 milyondan fazla kullanıcı, seyahatini Enuygun’la planlıyor!</h1>
        <button className="down-btn">
          Hemen İndir
          <span>
            <DownloadIcon fontSize="large" />
          </span>
        </button>
        <div className="downloadedBanner">
          <img src="/images/app-store.svg" alt="" />
          <img src="/images/google-play.svg" alt="" />
          <img src="/images/app-gallery.svg" alt="" />
        </div>
      </div>
      <div className="banner__right">
        <img src="/images/group-app-banner-44197.png" alt="" />
      </div>
    </div>
  );
}

export default Banner;
