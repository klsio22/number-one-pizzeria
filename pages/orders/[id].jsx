import React from 'react';
//import Image from 'next/image';
import styles from '/styles/Order.module.scss';

export default function Order() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>left</div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.h2}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
}
