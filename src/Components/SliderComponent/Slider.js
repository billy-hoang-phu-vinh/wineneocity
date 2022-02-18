import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination} from 'swiper';

import 'swiper/css/bundle'

SwiperCore.use([Navigation,Pagination]);

function Slider() {
  // init slides
  const slides = [];
  // spread slide
  for (let index = 0; index < 4; index++) {
    slides.push(
      <SwiperSlide key={`slide-${index}`}>
        <img
          src="https://cdn.wallpapersafari.com/66/34/TnZ1Ol.jpg"
          alt=""
          srcset=""
        />
      </SwiperSlide>
    );
  }
  return (
    <div className="slider-support">
      {/* test */}
      <div className="slider-navigation">
        <div className="container mx-auto">
          <div className="d-flex justify-between">
            {/* <div className="bg-red size-test"> */}
              {/* slider */}
              {/* <Swiper style={{height: "400px",width: "400px"}} id="main"> */}
              <Swiper 
              navigation 
              pagination 
              spaceBetween={0}
              slidesPerView={1}
              className="slider-show" id="sliderShow">{slides}</Swiper>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Slider;
