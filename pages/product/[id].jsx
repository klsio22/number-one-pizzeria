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
        <span className={styles.price}>R${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.chooce}>Escolha o tamanho</h3>

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

        <h3 className={styles.close}>Escolha ingredientes adicionais</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type='checkbox'
              id='double'
              name='double'
              className={styles.checkbox}
            />
            <label htmlFor='double'>Ingredientes duplos</label>
          </div>
          <div className={styles.option}>
            <input
              type='checkbox'
              id='extra'
              name='extra'
              className={styles.checkbox}
            />
            <label htmlFor='extra'>Queijo extra</label>
          </div>
          <div className={styles.option}>
            <input
              type='checkbox'
              id='spicy'
              name='spicy'
              className={styles.checkbox}
            />
            <label htmlFor='spicy'>Molho Picante</label>
          </div>
          <div className={styles.option}>
            <input
              type='checkbox'
              id='garlic'
              name='garlic'
              className={styles.checkbox}
            />
            <label htmlFor='garlic'>Molho de alho</label>
          </div>

          <div className={styles.add}>
            <input
              type={'number'}
              defaultValue={1}
              className={styles.quantity}
            />
            <a href={'/cart'}>
              <button className={styles.button}>Adicionar ao carinho</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
