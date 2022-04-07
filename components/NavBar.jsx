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
          <div className={styles.text}>PEÇA AGORA</div>
          <div className={styles.text}>021 658 684</div>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <a href={'/'}>
            <li className={styles.listItem}>Pagina inicial</li>
          </a>

          <a href={'/product/213'}>
            <li className={styles.listItem}>Produtos</li>
          </a>

          <a href={'/'}>
            <Image
              className={styles.logo}
              src='/img/logo1.png'
              alt='Logo'
              width='160px'
              height='69px'
            />
          </a>
          
          <li className={styles.listItem}>Eventos</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contato</li>
        </ul>
      </div>

      <div className={styles.item}>
        <div className={styles.miniCart}>
          <a href={'/cart'}>
            <Image
              src='/img/cart.png'
              alt='Image cart'
              width='30'
              height='30px'
            />
          </a>

          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
}
