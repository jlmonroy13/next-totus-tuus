import Head from '../../components/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SecondSection from '../../components/Interviews/Interview-section/SecondSection';

export default () => (
  <div>
    <Head
      title="Revista Totus Tuus - Entrevistas Músicos Católicos"
      description="Entrevista a Músicos Católicos."
      url="https://www.revistatotustuus.com/entrevistas/musicos-catolicos"
      ogImage="/static/images/logo.png"
    />
    <Header />
    <SecondSection />
    <Footer />
  </div>
);
