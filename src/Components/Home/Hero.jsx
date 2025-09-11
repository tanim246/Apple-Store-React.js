// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide2 from "../../Slider/Slide2";
import Slide1 from "../../Slider/Slide1";
import Slide3 from "../../Slider/Slide3";


export default function Hero() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <Slide2 />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Slide1 />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Slide3 />
          </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
