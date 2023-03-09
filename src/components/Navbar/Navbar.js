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
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function Navbar() {
  const [loginPopup, setLoginPopup] = useState(false);
  const [sigUpPopup, setSignUpPopup] = useState(false);
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
          <li
            className="navbar__right-list-item hover"
            onClick={() => {
              setSignUpPopup(true);
            }}
          >
            Üye Ol
          </li>
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

      {sigUpPopup && (
        <div className="signUp">
          <div className="signUp__left">
            <img
              src="https://cdn2.enuygun.com/media/lib/uploads/image/logo-kaynagi-33816.jpeg"
              alt="ENUYGUN"
            />
            <p>Tüm bilgileriniz elinizin altında!</p>
            <ul className="signUp__left-list">
              <li className="signUp__left-list-item">
                <div>
                  <CheckCircleOutlineIcon />
                </div>
                <div>
                  <strong>Yolcu bilgilerinizi kaydedin</strong>
                  <p>
                    Kendinize ve sevdiklerinize ait bilgileri kaydedin, bilet ve
                    rezervasyon işlemlerinizi çok daha hızlı halledin.
                  </p>
                </div>
              </li>
              <li className="signUp__left-list-item">
                <div>
                  <CheckCircleOutlineIcon />
                </div>
                <div>
                  <strong>Ödemenizi kolayca yapın</strong>
                  <p>
                    Kredi kartı bilgilerinizi güvenle saklayın ve ödemenizi
                    sadece saniyeler içinde yapın.
                  </p>
                </div>
              </li>
              <li className="signUp__left-list-item">
                <div>
                  <CheckCircleOutlineIcon />
                </div>
                <div>
                  <strong>Tüm detaylar tek bir yerde</strong>
                  <p>
                    Rezervasyonlarınıza ve bilet bilgilerinize dilediğiniz zaman
                    ulaşın.
                  </p>
                </div>
              </li>
              <li className="signUp__left-list-item">
                <div>
                  <CheckCircleOutlineIcon />
                </div>
                <div className="signUp__left-list-item-desc">
                  <strong>Kredi kartı puanlarınızı kullanın</strong>
                  <p>
                    Kredi kartı puanlarınızı hesabınıza aktarın, biriken
                    puanlarla uçak ya da otobüs biletinizi alın, otel
                    rezervasyonunuzu yapın.
                  </p>
                </div>
              </li>
            </ul>
            <div className="signUp__left-bottom">
              <div>
                <p>
                  Profesyonellere özel kurumsal üyelik avantajlarından
                  yararlanın...
                </p>
              </div>
              <div className="signUpCoorp">
                <button>Kurumsal Üye Ol</button>
              </div>
            </div>
          </div>
          <div className="signUp__right">
            <h2>Enuygun'a Üye Ol</h2>
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
                  className="passwordIcon signUpPassIcon"
                  onClick={togglePassword}
                />
              ) : (
                <VisibilityOffIcon
                  className="passwordIcon signUpPassIcon"
                  onClick={togglePassword}
                />
              )}
            </div>
            <div className="checkboxPart">
              <input className="chechbox" type="checkbox" />
              <span>
                İndirimler ve kampanyalardan <strong>Rıza Metni</strong> Rıza
                kapsamında haberdar olmak istiyorum.
              </span>
            </div>
            <button className="signUpPopup">Üye Ol</button>
            <div className="logInPopup SignUpPopup">
              <div className="facebook facebook-sign">
                <FacebookIcon />
                Facebook ile üye ol
              </div>
              <div className="google google-sign">
                <GoogleIcon />
                Google ile üye ol
              </div>
            </div>
            <div className="signUp__bottom-desc">
              <p>
                Kişisel verileriniz <strong>Aydınlatma Metni</strong> kapsamında
                işleniyor. Üye olarak{" "}
                <strong>Enuygun Kullanım Koşulları</strong>
                'nı kabul ettiğinizi onaylamış olursunuz.
              </p>
            </div>
            <div className="bottomIf">
              <p>
                Üyeliğin varsa <strong>Giriş Yap</strong>
              </p>
            </div>
            <CloseIcon
              className="closeIcon"
              onClick={() => {
                setSignUpPopup(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
