import React, { useEffect, useState } from 'react';
import './Navbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {
  const [loginPopup, setLoginPopup] = useState(false);
  const [sigUpPopup, setSignUpPopup] = useState(false);
  const [languagePopup, setLanguagePopup] = useState(false);
  const [languageImg, setLanguageImg] = useState('/images/turkey.png');
  const [lang, setLang] = useState('');
  const [passwordType, setPasswordType] = useState('Password');
  const [passwordInput, setPasswordInput] = useState('');
  const [topBar, setTopBar] = useState(false);

  const [menu, setMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setMenu(true);
      } else {
        setMenu(false);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    } else {
      setPasswordType('password');
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    if (scrollPosition >= 500) {
      setTopBar(true);
    } else {
      setTopBar(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      {openMenu && (
        <div className="hamburgerMenu">
          <ul className="navbar__left-list navbar__left-list-hamburger">
            <li className="item-hamburger">Uçak Bileti</li>
            <li className=" item-hamburger">Otobüs Bileti</li>
            <li className=" item-hamburger">Otel</li>
            <li className="item-hamburger">Araç Kiralama</li>
          </ul>
          <div className="navbar__right navbar__right-hamburger">
            <ul className="navbar__right-list navbar__right-list-hamburger">
              <li
                className="navbar__right-list-item-hamburger "
                onClick={() => {
                  setLoginPopup(true);
                  setOpenMenu(false);
                }}
              >
                Giriş Yap
              </li>
              <li
                className="navbar__right-list-item-hamburger "
                onClick={() => {
                  setSignUpPopup(true);
                  setOpenMenu(false);
                }}
              >
                Üye Ol
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="navbar__left">
        <img
          src="https://cdn2.enuygun.com/media/lib/uploads/image/logo-kaynagi-33816.jpeg"
          alt="ENUYGUN"
        />
        {!menu && (
          <ul className="navbar__left-list">
            <li className="navbar__left-list-item">Uçak Bileti</li>
            <li className="navbar__left-list-item">Otobüs Bileti</li>
            <li className="navbar__left-list-item">Otel</li>
            <li className="navbar__left-list-item">Araç Kiralama</li>
            <li className="navbar__left-list-item">
              <MoreHorizIcon />
            </li>
          </ul>
        )}
      </div>

      {menu ? (
        <div className="navbar__right">
          <li
            className="navbar__left-list-item"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <MenuIcon />
          </li>
        </div>
      ) : (
        <>
          <div className="navbar__right">
            <ul className="navbar__right-list">
              <li className="navbar__right-list-item notification">
                <NotificationsNoneIcon />
              </li>
              <li
                className="navbar__right-list-item"
                onClick={() => {
                  setLanguagePopup(true);
                }}
              >
                <img className="flag" src={languageImg} alt="" />
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
        </>
      )}

      {loginPopup && (
        <div className="background">
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
              {passwordType === 'password' ? (
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
        </div>
      )}

      {sigUpPopup && (
        <div className="background">
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
                      Kendinize ve sevdiklerinize ait bilgileri kaydedin, bilet
                      ve rezervasyon işlemlerinizi çok daha hızlı halledin.
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
                      Rezervasyonlarınıza ve bilet bilgilerinize dilediğiniz
                      zaman ulaşın.
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
                {passwordType === 'password' ? (
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
                  Kişisel verileriniz <strong>Aydınlatma Metni</strong>{' '}
                  kapsamında işleniyor. Üye olarak{' '}
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
        </div>
      )}

      {languagePopup && (
        <div className="background">
          <div className="language">
            <p>Ülke / Site</p>
            <ul>
              <li className="language__list-item">
                <div className="language__list-item-left">
                  <img
                    className="language__image"
                    src="/images/turkey.png"
                    alt=""
                  />
                  Enuygun.com <small>Türkçe</small>
                </div>

                <input
                  type="radio"
                  name="language"
                  value="/images/turkey.png"
                  onChange={(e) => {
                    setLang(e.target.value);
                  }}
                  defaultChecked={languageImg === '/images/turkey.png'}
                />
              </li>
              <li className="language__list-item">
                <div className="language__list-item-left">
                  <img
                    className="language__image"
                    src="/images/de.svg"
                    alt=""
                  />
                  Wingie.de <small>Deutsch</small>
                </div>
                <input
                  type="radio"
                  name="language"
                  value="/images/de.svg"
                  onChange={(e) => {
                    setLang(e.target.value);
                  }}
                  defaultChecked={languageImg === '/images/de.svg'}
                />
              </li>
              <li className="language__list-item">
                <div className="language__list-item-left">
                  <img
                    className="language__image"
                    src="/images/gb.svg"
                    alt=""
                  />
                  Wingie.co.uk <small>English</small>
                </div>
                <input
                  type="radio"
                  name="language"
                  value="/images/gb.svg"
                  onChange={(e) => {
                    setLang(e.target.value);
                  }}
                  defaultChecked={languageImg === '/images/gb.svg'}
                />
              </li>
              <li className="language__list-item">
                <div className="language__list-item-left">
                  <img
                    className="language__image"
                    src="/images/world.svg"
                    alt=""
                  />
                  Wingie.com <small>English</small>
                </div>
                <input
                  type="radio"
                  name="language"
                  value="/images/world.svg"
                  onChange={(e) => {
                    setLang(e.target.value);
                  }}
                  defaultChecked={languageImg === '/images/world.svg'}
                />
              </li>
              <li className="language__list-item">
                <div className="language__list-item-left">
                  <img
                    className="language__image"
                    src="/images/es.svg"
                    alt=""
                  />
                  Wingie.es <small>Español</small>
                </div>
                <input
                  type="radio"
                  name="language"
                  value="/images/es.svg"
                  onChange={(e) => {
                    setLang(e.target.value);
                  }}
                  defaultChecked={languageImg === '/images/es.svg'}
                />
              </li>
              <li className="language__list-item">
                <div className="language__list-item-left">
                  <img
                    className="language__image"
                    src="/images/ae.svg"
                    alt=""
                  />
                  Wingie.ae <small>العربية</small>
                </div>
                <input
                  type="radio"
                  name="language"
                  value="/images/ae.svg"
                  onChange={(e) => {
                    setLang(e.target.value);
                  }}
                  defaultChecked={languageImg === '/images/ae.svg'}
                />
              </li>
              <li className="language__list-item">
                <div className="language__list-item-left">
                  <img
                    className="language__image"
                    src="/images/ru.svg"
                    alt=""
                  />
                  ru.wingie.com <small>русский</small>
                </div>
                <input
                  type="radio"
                  name="language"
                  value="/images/ru.svg"
                  onChange={(e) => {
                    setLang(e.target.value);
                  }}
                  defaultChecked={languageImg === '/images/ru.svg'}
                />
              </li>
            </ul>
            <div className="language__bottom">
              <button
                className="language__bottom-cancel"
                onClick={() => {
                  setLanguagePopup(false);
                }}
              >
                İptal
              </button>
              <button
                className="language__bottom-confirm"
                onClick={() => {
                  setLanguagePopup(false);
                  setLanguageImg(lang);
                }}
              >
                Uygula
              </button>
            </div>
          </div>
        </div>
      )}
      {topBar && (
        <div className="scrollTop">
          <div className="checkbox">
            <label>Aktarmasız</label>
            <input type="checkbox" />
            <label>Tek Yön</label>
            <input type="checkbox" />
          </div>
          <div className="inputArea">
            <input className="input" placeholder="Nereden" />
            <input className="input" placeholder="Nereye" />
            <input className="input" placeholder="Gidiş Tarihi" />
            <input className="input" placeholder="Dönüş Tarihi" />
            <input className="input" placeholder="1 Yolcu / Ekonomi" />
            <button>Ucuz bilet bul </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
