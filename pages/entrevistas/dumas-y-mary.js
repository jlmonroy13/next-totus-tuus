import Head from '../../components/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Interview17 from '../../components/Interviews/_Interview-17';

export default () => (
  <div>
    <Head
      title="Revista Totus Tuus - Dumas y Mary"
      description="Entrevista a Dumas y Mary."
      url="https://www.revistatotustuus.com/entrevistas/dumas-y-mary"
      ogImage="/static/images/interviews/interview17/1.jpeg"
    />
    <Header />
    <Interview17 />
    <Footer />
  </div>
);
