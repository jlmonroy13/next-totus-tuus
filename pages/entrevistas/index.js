import Head from '../../components/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Interviews from '../../components/Interviews';

export default () => (
  <div>
    <Head
      title="Revista Totus Tuus - Entrevistas"
      description="Entrevistas exclusivas realizadas por La revista TOTUS TUUS."
      url="https://www.revistatotustuus.com/entrevistas"
      ogImage="/static/images/interviews/02.jpg"
    />
    <Header />
    <Interviews />
    <Footer />
  </div>
);
