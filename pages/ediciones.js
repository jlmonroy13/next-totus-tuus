import Link from 'next/link';
import Head from '../components/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Editions from '../components/Editions';

export default () => (
  <div>
    <Head title="Totus Tuus - Ediciones" />
    <Header />
    <Editions />
    <Footer />
  </div>
);
