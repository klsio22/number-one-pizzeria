import '../styles/globals.scss';
import Layout from '../components/Loyout';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
