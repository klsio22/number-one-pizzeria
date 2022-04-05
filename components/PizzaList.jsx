import React from 'react';
import styles from '/styles/PazzaList.module.scss';
import PizzaCard from './PizzaCard';

export default function PizzzList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The best Pizza in town</h1>
      <p className={styles.desc}>
        Qui voluptate ea tempor mollit ad deserunt ullamco laboris ad deserunt sunt fugiat.
        Qui voluptate ea tempor mollit ad deserunt ullamco laboris ad deserunt sunt fugiat.
        Qui voluptate ea tempor mollit ad deserunt ullamco laboris ad deserunt sunt fugiat.
        Qui voluptate ea tempor mollit ad deserunt ullamco laboris ad deserunt sunt fugiat.
        Qui voluptate ea tempor mollit ad deserunt ullamco laboris ad deserunt sunt fugiat.
        Qui voluptate ea tempor mollit ad deserunt ullamco laboris ad deserunt sunt fugiat.
      </p>

      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />

        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
}
