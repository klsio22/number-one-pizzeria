import Image from 'next/image';
import React from 'react';
import styles from '../styles/Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src='/img/bg.png'
          layout='fill'
          alt='glass of wine in the table'
        />
      </div>

      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.numberOne}>
            OH YES , WE DID .THE LAMA PIZZA , WELL BEKED SLICE OF PIZZA
          </h2>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>Find our Restaurants</h1>
          <p className={styles.text}>
            1654.Ron Read #304
            <br /> NewYork , 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            1654.Ron Read #304
            <br /> NewYork , 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            1654.Ron Read #304
            <br /> NewYork , 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            1654.Ron Read #304
            <br /> NewYork , 85022
            <br /> (602) 867-1010
          </p>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>Working Hours</h1>
          <p className={styles.text}>
            Monday until Friday
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            Monday until Friday
            <br /> 9:00 - 22:00
          </p>
        </div>
      </div>
    </div>
  );
}
