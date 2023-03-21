import React from "react";
import FooterResp from "./FooterResp";

function FooterList() {
  return (
    <>
      <ul>
        <FooterResp
          title="Uçak Bileti"
          items={["THY", "Pegasus", "SunExpress", "AnadoluJet"]}
        />
      </ul>
      <ul>
        <FooterResp
          title="Otobüs Bileti"
          items={[
            "İstanbul Otelleri",
            "Antalya Otelleri",
            "Bodrum Otelleri",
            "İzmir Otelleri",
            "Marmaris Otelleri",
            "Fethiye Otelleri",
          ]}
        />
      </ul>
      <ul>
        <FooterResp
          title="Araç Kiralama"
          items={[
            "İstanbul Araç Kiralama",
            "Ankara Araç Kiralama",
            "İzmir Araç Kiralama",
            "Antalya Araç Kiralama",
          ]}
        />
      </ul>
      <ul>
        <FooterResp
          title="Kredi"
          items={[
            "İhtiyaç Kredisi",
            "Konut Kredisi",
            "Taşıt Kredisi",
            "Kredi Kartı",
            "Mevduat",
          ]}
        />
      </ul>
      <ul>
        <FooterResp
          title="Sigorta"
          items={[
            "Kasko",
            "Zorunlu Trafik Sigortası",
            "Seyahat Sigortası",
            "Sağlık Sigortası",
            "Tamamlayıcı Sağlık",
            "Konut Sigortası",
            "DASK",
          ]}
        />
      </ul>
      <ul
        className="InternetGSM"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <FooterResp
          title="GSM"
          items={["Türk Telekom", "Turkcell", "Vodafone"]}
        />

        <FooterResp
          title="İnternet Bağlantıları"
          items={[
            "D-Smart",
            "Millenicom",
            "Türk Telekom",
            "Türknet",
            "Superonline",
          ]}
        />
      </ul>
      <ul>
        <FooterResp
          title="Daha Fazlası"
          items={[
            "Hakkımızda",
            "İletişim",
            "Şirket Bilgileri",
            "Reklam",
            "Bilgi Yazıları",
            "Kişisel Verilerin Korunması",
            "Kullanım Koşulları",
            "Kurumsal Biletleme Koşulları",
            "Kariyer",
            "Logo Kullanımı",
            "Yardım",
            "Ödüllerimiz",
            "Resmi Tatiller",
          ]}
        />
      </ul>
    </>
  );
}

export default FooterList;
