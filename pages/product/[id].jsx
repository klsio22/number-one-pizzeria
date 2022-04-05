import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import styles from '/styles/Product.module.scss';

export default function Product() {
  const [size, setSize] = useState(0);
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
          <Image
            src={pizza.img}
            layout='fill'
            alt='Pizza Image'
            objectFit='contain'
          />
        </div>
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.chooce}>Choose the size</h3>

        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src='/img/size.png' alt='' layout='fill' />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size}>
            <Image
              src='/img/size.png'
              alt=''
              layout='fill'
              onClick={() => setSize(1)}
            />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size}>
            <Image
              src='/img/size.png'
              alt=''
              layout='fill'
              onClick={() => setSize(2)}
            />
            <span className={styles.number}>Large</span>
          </div>
        </div>

        <h3 className={styles.close}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type='checkbox'
              id='double'
              name='double'
              className={styles.checkbox}
            />
            <label htmlFor='double'>Double ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              type='checkbox'
              id='extra'
              name='extra'
              className={styles.checkbox}
            />
            <label htmlFor='extra'>Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              type='checkbox'
              id='spicy'
              name='spicy'
              className={styles.checkbox}
            />
            <label htmlFor='spicy'>Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              type='checkbox'
              id='garlic'
              name='garlic'
              className={styles.checkbox}
            />
            <label htmlFor='garlic'>Garlic Souce</label>
          </div>

          <div className={styles.add}>
            <input
              type={'number'}
              defaultValue={1}
              className={styles.quantity}
            />
            <a href={'/cart'}>
              <button className={styles.button}>Add to Cart</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
