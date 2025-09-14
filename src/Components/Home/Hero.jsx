// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide2 from "../../Slider/Slide2";
import Slide1 from "../../Slider/Slide1";
import Slide3 from "../../Slider/Slide3";
import Products from "../../Shop/Products";
import Shop from "../../Shop/Shop";
import ProductJson from "../../Shop/ProductJson";

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
          <div className="h-[400px]">
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
      <div className="max-w-6xl mx-auto ">
        <div className="sm:p-12 text-4xl  text-center underline text-orange-500 font-semibold">
          <h1>Our Products</h1>
        </div>
        <ProductJson />
      </div>
    </>
  );
}
