// import SliderJSON from '../../../../constants/Event/Slider.json';

import "./index.css"
import { Autoplay,Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { truncate } from "fs";

interface Props {
  JSONDATA: Array<Object>;
}

function Carousal({ JSONDATA }: Props) {
  return (
    <Swiper
      className="max-w-full max-h-full"
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {JSONDATA?.map(({ id, image, title, about }: any) => {
        return (
          <SwiperSlide key={id}>
            <div className="w-full h-full flex flex-col">
              <img
                src={image}
                alt={id}
                className="max-h-[480px] object-cover"
              />
              <h1 className="text-center capitalize font-bold text-2xl">
                {title}
              </h1>
              <h1 className="text-center capitalize font-bold">{about}</h1>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Carousal;
