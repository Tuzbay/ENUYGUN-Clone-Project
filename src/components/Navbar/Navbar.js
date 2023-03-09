import React, { useState } from "react";
import "./Navbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Navbar() {
  const [loginPopup, setLoginPopup] = useState(false);
  const [passwordType, setPasswordType] = useState("Password");
  const [passwordInput, setPasswordInput] = useState("");

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    } else {
      setPasswordType("password");
    }
  };
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
          <li className="navbar__left-list-item">
            <MoreHorizIcon />
          </li>
        </ul>
      </div>
      <div className="navbar__right">
        <ul className="navbar__right-list">
          <li className="navbar__right-list-item notification">
            <NotificationsNoneIcon />
          </li>
          <li className="navbar__right-list-item ">
            <img className="flag" src="/images/trflag.png" alt="" />
            <KeyboardArrowDownIcon className="flagArrow" />
          </li>
          <li
            className="navbar__right-list-item hover"
            onClick={() => {
              setLoginPopup(true);
            }}
          >
            Giriş Yap
          </li>
          <li className="navbar__right-list-item hover">Üye Ol</li>
        </ul>
      </div>

      {loginPopup && (
        <div className="login">
          <h2>Giriş Yap</h2>
          <input type="email" placeholder="E-Posta" />
          <div className="passwordInput">
            <input
              type={passwordType}
              onChange={handlePasswordChange}
              value={passwordInput}
              placeholder="Şifre"
            />
            {passwordType === "password" ? (
              <VisibilityIcon
                className="passwordIcon"
                onClick={togglePassword}
              />
            ) : (
              <VisibilityOffIcon
                className="passwordIcon"
                onClick={togglePassword}
              />
            )}
          </div>

          <button>Giriş Yap</button>
          <div className="signUpandForget">
            <p>Üye Ol</p>
            <p>Şifremi Unuttum</p>
          </div>
          <p className="or">veya</p>
          <div className="logInPopup">
            <div className="facebook">
              <FacebookIcon />
              Facebook ile giriş yap
            </div>
            <div className="google">
              <GoogleIcon />
              Google ile giriş yap
            </div>
          </div>
          <CloseIcon
            className="closeIcon"
            onClick={() => {
              setLoginPopup(false);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
