import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

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
        <ul>
          <li>
            <strong>Uçak Bileti</strong>
          </li>
          <li>THY</li>
          <li>Pegasus</li>
          <li>SenExpress</li>
          <li>AnadoluJet</li>
        </ul>

        <ul>
          <li>
            <strong>Otel</strong>
          </li>
          <li>İstanbul Otelleri</li>
          <li>Antalya Otelleri</li>
          <li>Bodrum Otelleri</li>
          <li>İzmir Otelleri</li>
          <li>Marmaris Otelleri</li>
          <li>Fethiye Otelleri</li>
        </ul>

        <ul>
          <li>
            <strong>Otobüs Bileti</strong>
          </li>
          <li>İstanbul Otobüs Bileti</li>
          <li>Ankara Otobüs Bileti</li>
          <li>İzmir Otobüs Bileti</li>
          <li>Bodrum Otobüs Bileti</li>
          <li>Adana Otobüs Bileti</li>
          <li>Antalya Otobüs Bileti</li>
        </ul>

        <ul>
          <li>
            <strong>Araç Kiralama</strong>
          </li>
          <li>İstanbul Araç Kiralama</li>
          <li>Ankara Araç Kiralama</li>
          <li>İzmir Araç Kiralama</li>
          <li>Antalya Araç Kiralama</li>
        </ul>

        <ul>
          <li>
            <strong>Kredi</strong>
          </li>
          <li>İhtiyaç Kredisi</li>
          <li>Konut Kredisi</li>
          <li>Taşıt Kredisi</li>
          <li>Kredi Kartı</li>
          <li>Mevduat</li>
        </ul>

        <ul>
          <li>
            <strong>Sigorta</strong>
          </li>
          <li>Kasko</li>
          <li>Zorunlu Trafik Sigortası</li>
          <li>Seyahat Sigortası</li>
          <li>Sağlık Sigortası</li>
          <li>Tamamlayıcı Sağlık</li>
          <li>Konut Sigortası</li>
          <li>DASK</li>
        </ul>
        <div>
          <ul>
            <li>
              <strong>GSM</strong>
            </li>
            <li>Türk Telekom</li>
            <li>Turkcell</li>
            <li>Vodafone</li>
          </ul>
          <ul>
            <li>
              <strong>İnternet Bağlantıları</strong>
            </li>
            <li>D-Smart</li>
            <li>Millenicom</li>
            <li>Turk Telekom</li>
            <li>Turknet</li>
            <li>Superonline</li>
          </ul>
        </div>
        <ul>
          <li>Hakkımızda</li>
          <li>İletişim</li>
          <li>Şirket Bilgileri</li>
          <li>Reklam</li>
          <li>Bilgi Yazıları</li>
          <li>Kişisel Verilerin Korunması</li>
          <li>Kullanım Koşulları</li>
          <li>Kurumsal Biletleme Koşulları</li>
          <li>Kariyer</li>
          <li>Logo Kullanımı</li>
          <li>Kampanyalar</li>
          <li>Yardım</li>
          <li>Ödüllerimiz</li>
          <li>Resmi Tatiller</li>
        </ul>
      </div>

      <div className="copyright">
        <small>Enuygun.com IATA üyesidir. "8821943"</small>
        <img
          src="https://cdn2.enuygun.com/media/lib/uploads/image/etbis-41145.jpeg"
          alt=""
        />
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
