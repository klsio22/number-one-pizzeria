import React from 'react';
import styles from '/styles/Navbar.module.scss';
import Image from 'next/image';
export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src='/img/telephone.png'
            alt='telePhone'
            width='32'
            height='32'
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}>021 658 684</div>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Protucts</li>
          <li className={styles.listItem}>Menu</li>

          <Image className={styles.logo} src='/img/logo1.png' alt='Logo' width='160px' height='69px' />

          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>

      <div className={styles.item}>
        <div className={styles.miniCart}>
          <Image
            src='/img/cart.png'
            alt='Image cart'
            width='30'
            height='30px'
          />

          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
}
