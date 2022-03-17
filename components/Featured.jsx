import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/Featured.module.scss';
import 'swiper/css';
import { Navigation } from 'swiper';

export default function Featured() {
  return (
    <Swiper
    navigation={true} modules={[Navigation]} className={styles.container}
    >
      <SwiperSlide>
        <Image
          src={'/img/featured.png'}
          alt='Images pizzas'
          layout='fill'
          objectFit='contain'
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
          src={'/img/featured2.png'}
          alt='Images pizzas'
          layout='fill'
          objectFit='contain'
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
          src={'/img/featured2.png'}
          alt='Images pizzas'
          layout='fill'
          objectFit='contain'
        />
      </SwiperSlide>
    </Swiper>
  );
}
