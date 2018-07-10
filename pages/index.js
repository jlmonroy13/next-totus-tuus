import Link from 'next/link';
import Head from '../components/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';

export default () => (
  <div>
    <Head
      title="Revista Totus Tuus"
      description="La revista TOTUS TUUS es un medio de evangelización católico, creado con el anhelo de llevar el amor de Dios a muchas personas. Se creó en Colombia en la ciudad de Barranquilla en el año 2014 y su distribución es totalmente GRATIS"
      url="https://www.revistatotustuus.com"
      ogImage="/static/images/logo.png"
    />
    <Header />
    <Home />
    <Footer />
  </div>
);
