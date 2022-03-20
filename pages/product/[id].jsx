import Image from 'next/image';
import React from 'react';

export default function Product() {
  const pizza = {
    id: 1,
    img: '/img/pizza.png',
    name: 'Campagnola',
    price: [19.9, 23.9, 27.9],
    desc: 'Lorem ipsum Nostrud in aliquip veniam deserunt laboris cillum nulla cupidatat sunt.',
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgConteiner}>
          <Image src={pizza.img} layout='fill' alt='Pizza Image' />
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}
