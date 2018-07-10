import Head from '../../components/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Interview1 from '../../components/Interviews/_Interview-1';

export default () => (
  <div>
    <Head
      title="Revista Totus Tuus - Rochi Stevenson"
      description="Entrevista a Rochi Stevenson."
      url="https://www.revistatotustuus.com/entrevistas/rochi-stevenson"
      ogImage="/static/images/interviews/interview1/1.jpg"
    />
    <Header />
    <Interview1 />
    <Footer />
  </div>
);
