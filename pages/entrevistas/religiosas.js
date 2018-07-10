import Head from '../../components/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FirstSection from '../../components/Interviews/Interview-section/FirstSection';

export default () => (
  <div>
    <Head
      title="Revista Totus Tuus - Entrevistas Religiosas"
      description="Entrevistas Religiosas."
      url="https://www.revistatotustuus.com/entrevistas/religiosas"
      ogImage="/static/images/logo.png"
    />
    <Header />
    <FirstSection />
    <Footer />
  </div>
);
