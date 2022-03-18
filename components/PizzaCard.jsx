import Image from 'next/image';
import React from 'react';
import styles from '../styles/PizzaCard.module.scss';
export default function PizzaCard() {
  return (
    <div className={styles.container}>
      <Image
        src='/img/pizza.png'
        alt='Pizza image'
        objectFit='contain'
        width='500'
        height='500'
      />
      <h1 className={styles.title}>Friori di zucca</h1>
      <span className={styles.price}>19.90</span>
      <p className={styles.desc}>
        Proident amet aute eiusmod aute ea ipsum in cillum eiusmod ullamco
        tempor nisi.
      </p>
    </div>
  );
}
