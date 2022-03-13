import Head from 'next/head';
//import Image from 'next/image';
import styles from '../styles/Home.module.scss';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Number one Pizzeria</title>
        <meta name='description' content='Top one pizzeria' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      homepage
      {/* <Image src='/img/logo.png' alt='logo-site' layout='fill'></Image> */}

    </div>
  );
}
