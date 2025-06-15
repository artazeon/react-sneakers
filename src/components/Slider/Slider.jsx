// src/components/Slider.jsx

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      //autoplay={false}
      pagination={{ clickable: true }}
      navigation={true}
    >
      <SwiperSlide>
        <div className="slide__wrapper">
          <div
            className="slide"
            style={{ backgroundImage: 'url(/img/slider/slide1.png)' }}
          >
            <div className="slide__content">
              <h3 className="slide__content-title">
                <span className="slide__content-title-green">
                  Adidas Kermit
                </span>{' '}
                — яркий стиль в движении
              </h3>
              <button className="slide__content-button">Купить</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide__wrapper">
          <div
            className="slide"
            style={{ backgroundImage: 'url(/img/slider/slide2.png)' }}
          >
            <div className="slide__content">
              <h3 className="slide__content-title">
                <span className="slide__content-title-green">Adidas</span> —
                комфорт и стиль каждый день
              </h3>
              <button className="slide__content-button">Купить</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide__wrapper">
          <div
            className="slide"
            style={{ backgroundImage: 'url(/img/slider/slide3.png)' }}
          >
            <div className="slide__content">
              <h3 className="slide__content-title">
                <span className="slide__content-title-green">Nike</span> —
                классика спортивной энергии
              </h3>
              <button className="slide__content-button">Купить</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
