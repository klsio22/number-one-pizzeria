import React from 'react';
import styles from '/styles/PazzaList.module.scss';
import PizzaCard from './PizzaCard';

export default function PizzzList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The best Pizza in town</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        NuFEE75IWLSFIHSDIURYUKFDOYU6AMLDHDKLÇSIROPYTIKDYSJI78R
        E7U86ELYEIRY768RUIYGURIEUIF78JVCKFYAJSKEUSDJAKFGJEDGV lla nec nibh ac
        nisl facilisis consectetur quis sit amet justo. Integer vel elit nec
        sapien lacinia interdum. Fusce est arcu, imperdiet vel semper nec,
        eleifend hendrerit arcu. Quisque at justo accumsan, placerat felis vel,
        aligytcaRLAFCAR ÇLLCAKRRRRYOUquet nibh.
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
