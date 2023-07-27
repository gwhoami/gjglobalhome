import HeroAutoSliderJSON from '../../../../../constants/Event/HeroAutoSlider.json';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const AutoSlider = () => {
  return (
    // <div className="max-w-[430px] max-h-[500px] relative">
    <Swiper
      className="max-w-full max-h-full"
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      // install Swiper modules
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: false }}
      // // scrollbar={{ draggable: false }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {HeroAutoSliderJSON.map(({ id, image }: any) => {
        // console.log(id, image);
        return (
          <SwiperSlide key={id}>
            <img src={image} alt={id} />
          </SwiperSlide>
        );
      })}
    </Swiper>
    // </div>
  );
};

export default AutoSlider;
