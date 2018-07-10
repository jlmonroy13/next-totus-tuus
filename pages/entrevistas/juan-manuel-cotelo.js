import Head from '../../components/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Interview11 from '../../components/Interviews/_Interview-11';

export default () => (
  <div>
    <Head
      title="Revista Totus Tuus - Juan Manuel Cotelo"
      description="Entrevista a Juan Manuel Cotel."
      url="https://www.revistatotustuus.com/entrevistas/juan-manuel-cotel"
      ogImage="/static/images/interviews/interview11/1.jpg"
    />
    <Header />
    <Interview11 />
    <Footer />
  </div>
);
