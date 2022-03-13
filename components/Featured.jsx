import React, { useState } from 'react';
import styles from '../styles/Featured.module.scss';
import Image from 'next/image';

export default function Featured() {
  const [index, setIndex] = useState(0);
  const images = [
    '/img/featured.png',
    '/img/featured2.png',
    '/img/featured3.png',
  ];

  const handleArrow = (direction) => {
    if (direction === 'l') {
      setIndex(index !== 0 ? index - 1 : 2);
    }

    if (direction === 'r') {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  console.log(index);
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowConteiner}
        style={{ left: 0 }}
        onClick={() => handleArrow('l')}
      >
        <Image
          src='/img/arrowl.png'
          alt='arrow left'
          layout='fill'
          objectFit='contain'
        />
      </div>

      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image
              src={img}
              alt='Images pizzas'
              layout='fill'
              objectFit='contain'
            />
          </div>
        ))}
      </div>

      <div
        className={styles.arrowConteiner}
        style={{ right: 0 }}
        onClick={() => handleArrow('r')}
      >
        <Image src='/img/arrowr.png' alt='arrow right' layout='fill' />
      </div>
    </div>
  );
}
