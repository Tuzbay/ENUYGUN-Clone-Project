import React, { useState } from 'react';
import './FindTicket.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import LocationOnIcon from "@mui/icons-material/LocationOn";

function FindTicket() {
  const [option, setOption] = useState('fligtTicket');

  return (
    <div className="findTicket">
      <div className="findTicket__options">
        <ul className="findTicket__options-list">
          <li
            className={
              option === 'fligtTicket'
                ? 'findTicket__options-list-item active'
                : 'findTicket__options-list-item '
            }
            onClick={() => setOption('fligtTicket')}
          >
            Uçak Bileti
          </li>
          <li
            className={
              option === 'Otel'
                ? 'findTicket__options-list-item active'
                : 'findTicket__options-list-item'
            }
            onClick={() => setOption('Otel')}
          >
            Otel
          </li>
          <li
            className={
              option === 'BusTicket'
                ? 'findTicket__options-list-item active'
                : 'findTicket__options-list-item'
            }
            onClick={() => setOption('BusTicket')}
          >
            Otobüs Bileti
          </li>
          <li
            className={
              option === 'PNR'
                ? 'findTicket__options-list-item active'
                : 'findTicket__options-list-item'
            }
            onClick={() => setOption('PNR')}
          >
            PNR Sorgulama
          </li>
          <li
            className={
              option === 'CancelTicket'
                ? 'findTicket__options-list-item active'
                : 'findTicket__options-list-item'
            }
            onClick={() => setOption('CancelTicket')}
          >
            Bilet İptal
          </li>
        </ul>
      </div>
      {option === 'fligtTicket' && (
        <div className="findTicket__desc">
          <div className="findTicket__desc-top">
            <input type="text" placeholder="Nereden" />
            <input type="text" placeholder="Nereye" />
          </div>
          <div className="findTicket__desc-middle">
            <input type="text" placeholder="Gidiş Tarihi" />
            <input type="text" placeholder="Dönüş Tarihi" />
          </div>
          <div className="findTicket__desc-bottom">
            <input type="text" placeholder="1 Yolcu / Ekonomi" />
          </div>
          <button className="cheap-button">
            Ucuz bilet bul
            <span>
              <KeyboardArrowRightIcon />
            </span>
          </button>
        </div>
      )}

      {option === 'Otel' && (
        <div className="otel__wrapper">
          <div className="otel__wrapper-top">
            <input
              className="otel__input"
              placeholder="Şehir, ilçe, tema, otel adı ara"
            />
            <input
              className="otel__input"
              placeholder="Giriş ve çıkış tarihini seçin"
            />
          </div>

          <div className="otel__wrapper-bottom">
            <input className="otel__input" placeholder="2 Yetişkin" />
          </div>
          <div className="otel__wrapper-bottom">
            <button>Otel Bul</button>
          </div>
        </div>
      )}

      {option === 'PNR' && (
        <>
          <div className="pnr">
            <div>
              <label>PNR Kodu</label>
              <input />
            </div>
            <div>
              <label>Yolcunun Soyadı</label>
              <input />
            </div>
          </div>
          <button className="pnr__button">Sorgula </button>
        </>
      )}
    </div>
  );
}

export default FindTicket;
