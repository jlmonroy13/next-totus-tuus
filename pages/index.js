import Link from 'next/link';
import Head from '../components/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';

export default () => (
  <div>
    <Head title="Home" />
    <Header />
    <Home />
    <Footer />
  </div>
);
