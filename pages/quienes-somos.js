import Link from 'next/link';
import Head from '../components/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';

export default () => (
  <div>
    <Head title="Quienes somos" />
    <Header />
    <About />
    <Footer />
  </div>
);
