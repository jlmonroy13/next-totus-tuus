import Head from '../../components/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Interview4 from '../../components/Interviews/_Interview-4';

export default () => (
  <div>
    <Head
      title="Revista Totus Tuus - Luna Eikar"
      description="Entrevista a Luna Eikar."
      url="https://www.revistatotustuus.com/entrevistas/luna-eikar"
      ogImage="/static/images/interviews/interview4/1.jpg"
    />
    <Header />
    <Interview4 />
    <Footer />
  </div>
);
