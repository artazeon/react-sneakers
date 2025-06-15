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
      autoplay={false}
      //autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation={true}
    >
      <SwiperSlide>
        <div
          className="slide"
          style={{ backgroundImage: 'url(/img/slider/slide1.png)' }}
        >
          <div className="slide__content">
            <h3 className="slide__content-title">
              <span className="slide__content-title-green">Stan Smith,</span>{' '}
              Forever!
            </h3>
            <button className="slide__content-button">Купить</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slide"
          style={{ backgroundImage: 'url(/img/slider/slide1.png)' }}
        >
          <div className="slide__content">
            <h3 className="slide__content-title">Stan Smith, Forever!</h3>
            <button className="slide__content-button">Купить</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slide"
          style={{ backgroundImage: 'url(/img/slider/slide1.png)' }}
        >
          <div className="slide__content">
            <h3 className="slide__content-title">Stan Smith, Forever!</h3>
            <button className="slide__content-btn">Купить</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
