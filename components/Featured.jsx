import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/Featured.module.scss';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper';

export default function Featured() {
  const images = [
    '/img/featured.png',
    '/img/featured2.png',
    '/img/featured3.png',
  ];

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      grabCursor={true}
      keyboard={{
        enabled: true,
      }}
      modules={[Navigation, Keyboard]}
      id={styles.container}
    >
      <div className={styles.itemContainer}>
        {images.map((img, i) => (
          <SwiperSlide
            className={styles.imgContainer}
            key={i}
            style={{ padding: '10px' }}
          >
            <Image
              src={img}
              alt='Images pizzas'
              layout='fill'
              objectFit='contain'
            />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
}
