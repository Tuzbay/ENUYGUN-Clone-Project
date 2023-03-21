import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FooterList from "./FooterList";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top-left">
          <img
            src="https://cdn2.enuygun.com/media/lib/uploads/image/logo-kaynagi-33816.jpeg"
            alt="ENUYGUN"
          />
        </div>
        <div className="footer__top-middle">
          <img src="/images/appstore.png" alt="AppStore" />
          <img
            style={{ border: "1px solid black", borderRadius: "6px" }}
            src="/images/googleplay.png"
            alt="GooglePlay"
          />
          <img src="/images/huawei.png" alt="AppGallery" />
        </div>
        <div className="footer__top-right">
          <span>Bizi takip edin:</span>
          <FacebookIcon fontSize="small" />
          <InstagramIcon fontSize="small" />
          <TwitterIcon fontSize="small" />
          <LinkedInIcon fontSize="small" />
          <YouTubeIcon fontSize="small" />
        </div>
      </div>
      <div className="footer__bottom">
        <FooterList />
      </div>
      <div className="copyright">
        <div className="copyright__top">
          <img
            src="https://cdn2.enuygun.com/media/lib/uploads/image/etbis-41145.jpeg"
            alt=""
          />
          <small>Enuygun.com IATA üyesidir. "8821943"</small>
        </div>
        <hr className="hr" />
        <small className="copyright__bottom">
          © 2008 - 2023 Tüm hakları saklıdır. Enuygun.com | Enuygun Seyahat,
          Belge No: 7153
        </small>
      </div>
    </div>
  );
}

export default Footer;
