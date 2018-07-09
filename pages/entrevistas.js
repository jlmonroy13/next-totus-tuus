import Link from 'next/link';
import Head from '../components/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Interviews from '../components/Interviews';

export default () => (
  <div>
    <Head title="Totus Tuus - Ediciones" />
    <Header />
    <Interviews />
    <Footer />
  </div>
);
