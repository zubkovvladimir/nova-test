import { FC } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/scss';

const Test: FC = () => (
  <Swiper
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    slidesPerView={3}
    spaceBetween={50}
  >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
  </Swiper>
);
export default Test;
