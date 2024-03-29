import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const slides = [
  {
    id: "1",
    title: "Uçak Biletin Cebinde!",
    description:
      "Enuygun mobil uygulaması ile uçak bileti almak çok hızlı! Mobil uygulamayı indir, binlerce uçuşu saniyeler içinde karşılaştır, sana en uygun uçuşu kolayca al!",
  },
  {
    id: "2",
    title: "BİG ile plan değişikliklerinden korkma!",
    description:
      "Bilet İptal Güvencesi'yle aldığın tüm uçak biletlerini planların değişse bile uçuşa 3 saat kalana kadar koşulsuz şartsız iptal edip, bilet tutarının %90'ını geri alırsın!",
  },
  {
    id: "3",
    title: "Tüm seyahatin Enuygun mobil uygulamasında!",
    description:
      "Uçak bileti, otobüs bileti ve otel rezervasyonu aynı anda sadece Enuygun mobil uygulamasında!",
  },
  {
    id: "4",
    title: "Enuygun'la araç kiralamak çok kolay!",
    description:
      "Aracını almak istediğin yer ve zamanı seç, sana en uygun olan aracı güvenle kirala!",
  },
  {
    id: "5",
    title: "Sevdiklerini Mutlu Etmenin Yolu: Enuygun Hediye Kart",
    description:
      "O'na Enuygun'dan seyahat hediye et, dilediği hava yoluyla, dilediği zaman dilediği yere uçsun.",
  },
];

function Slider() {
  return (
    <div className="slider">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides?.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div>
              <h2 className="slide__title">{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
