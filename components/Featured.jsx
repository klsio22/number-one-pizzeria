import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/Featured.module.scss';
import 'swiper/css';
import { Navigation } from 'swiper';

export default function Featured() {
  const images = [
    '/img/featured.png',
    '/img/featured2.png',
    '/img/featured3.png',
  ];

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className={styles.container}
    >
      {images.map((img, i) => (
        <div className={styles.imgContainer} key={i}>
          <SwiperSlide>
            <Image
              src={img}
              alt='Images pizzas'
              layout='fill'
              objectFit='contain'
            />
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
}
