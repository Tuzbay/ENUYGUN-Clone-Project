import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img
          src="https://cdn2.enuygun.com/media/lib/uploads/image/logo-kaynagi-33816.jpeg"
          alt="ENUYGUN"
        />
        <ul className="navbar__left-list">
          <li className="navbar__left-list-item">Uçak Bileti</li>
          <li className="navbar__left-list-item">Otobüs Bileti</li>
          <li className="navbar__left-list-item">Otel</li>
          <li className="navbar__left-list-item">Araç Kiralama</li>
          <li className="navbar__left-list-item">...</li>
        </ul>
      </div>
      <div className="navbar__right">
        <ul className="navbar__right-list">
          <li className="navbar__right-list-item">Zil</li>
          <li className="navbar__right-list-item">Bayrak</li>
          <li className="navbar__right-list-item">Giriş Yap</li>
          <li className="navbar__right-list-item">Üye Ol</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
