import React, { useState } from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  const [openFooter1, setOpenFooter1] = useState(false);
  const [openFooter2, setOpenFooter2] = useState(false);

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
        <ul>
          <div
            className="header"
            onClick={() => {
              setOpenFooter1(!openFooter1);
            }}
          >
            Uçak Bileti
            <span>+</span>
          </div>
          <li className={openFooter1 ? "visible" : "notVisible"}>THY</li>
          <li className={openFooter1 ? "visible" : "notVisible"}>Pegasus</li>
          <li className={openFooter1 ? "visible" : "notVisible"}>SenExpress</li>
          <li className={openFooter1 ? "visible" : "notVisible"}>AnadoluJet</li>
        </ul>

        <ul>
          <div
            className="header"
            onClick={() => {
              setOpenFooter2(!openFooter2);
            }}
          >
            Otel
            <span>+</span>
          </div>
          <li className={openFooter2 ? "visible" : "notVisible"}>
            İstanbul Otelleri
          </li>
          <li className={openFooter2 ? "visible" : "notVisible"}>
            Antalya Otelleri
          </li>
          <li className={openFooter2 ? "visible" : "notVisible"}>
            Bodrum Otelleri
          </li>
          <li className={openFooter2 ? "visible" : "notVisible"}>
            İzmir Otelleri
          </li>
          <li className={openFooter2 ? "visible" : "notVisible"}>
            Marmaris Otelleri
          </li>
          <li className={openFooter2 ? "visible" : "notVisible"}>
            Fethiye Otelleri
          </li>
        </ul>

        <ul>
          <div className="header">
            Otobüs Bileti
            <span>+</span>
          </div>
          <li className="notVisible">İstanbul Otobüs Bileti</li>
          <li className="notVisible">Ankara Otobüs Bileti</li>
          <li className="notVisible">İzmir Otobüs Bileti</li>
          <li className="notVisible">Bodrum Otobüs Bileti</li>
          <li className="notVisible">Adana Otobüs Bileti</li>
          <li className="notVisible">Antalya Otobüs Bileti</li>
        </ul>

        <ul>
          <div className="header">
            Araç Kiralama
            <span>+</span>
          </div>
          <li className="notVisible">İstanbul Araç Kiralama</li>
          <li className="notVisible">Ankara Araç Kiralama</li>
          <li className="notVisible">İzmir Araç Kiralama</li>
          <li className="notVisible">Antalya Araç Kiralama</li>
        </ul>

        <ul>
          <div className="header">
            Kredi
            <span>+</span>
          </div>
          <li className="notVisible">İhtiyaç Kredisi</li>
          <li className="notVisible">Konut Kredisi</li>
          <li className="notVisible">Taşıt Kredisi</li>
          <li className="notVisible">Kredi Kartı</li>
          <li className="notVisible">Mevduat</li>
        </ul>

        <ul>
          <div className="header">
            Sigorta
            <span>+</span>
          </div>
          <li className="notVisible">Kasko</li>
          <li className="notVisible">Zorunlu Trafik Sigortası</li>
          <li className="notVisible">Seyahat Sigortası</li>
          <li className="notVisible">Sağlık Sigortası</li>
          <li className="notVisible">Tamamlayıcı Sağlık</li>
          <li className="notVisible">Konut Sigortası</li>
          <li className="notVisible">DASK</li>
        </ul>
        <ul
          className="InternetGSM"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="header">
            GSM
            <span>+</span>
          </div>
          <li className="notVisible">Türk Telekom</li>
          <li className="notVisible">Turkcell</li>
          <li className="notVisible">Vodafone</li>
          <div className="header">
            İnternet Bağlantıları
            <span>+</span>
          </div>
          <li className="notVisible">D-Smart</li>
          <li className="notVisible">Millenicom</li>
          <li className="notVisible">Turk Telekom</li>
          <li className="notVisible">Turknet</li>
          <li className="notVisible">Superonline</li>
        </ul>
        <ul>
          <div className="header">
            Daha Fazlası
            <span>+</span>
          </div>
          <li className="notVisible">Hakkımızda</li>
          <li className="notVisible">İletişim</li>
          <li className="notVisible">Şirket Bilgileri</li>
          <li className="notVisible">Reklam</li>
          <li className="notVisible">Bilgi Yazıları</li>
          <li className="notVisible">Kişisel Verilerin Korunması</li>
          <li className="notVisible">Kullanım Koşulları</li>
          <li className="notVisible">Kurumsal Biletleme Koşulları</li>
          <li className="notVisible">Kariyer</li>
          <li className="notVisible">Logo Kullanımı</li>
          <li className="notVisible">Kampanyalar</li>
          <li className="notVisible">Yardım</li>
          <li className="notVisible">Ödüllerimiz</li>
          <li className="notVisible">Resmi Tatiller</li>
        </ul>
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
