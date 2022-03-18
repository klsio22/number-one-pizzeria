import Head from 'next/head';
import Featured from '../components/Featured';
import styles from '../styles/Home.module.scss';

// eslint-disable-next-line
import "swiper/css/bundle";

import PizzzList from '../components/PizzaList';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Number one Pizzeria</title>
        <meta name='description' content='Top one pizzeria' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Featured/>
      <PizzzList/>
    </div>
  );
}
