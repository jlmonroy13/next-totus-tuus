import Head from '../../components/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Interview2 from '../../components/Interviews/_Interview-2';

export default () => (
  <div>
    <Head
      title="Revista Totus Tuus - Alejandro Ordoñez"
      description="Entrevista al Ex Procurador Alejandro Ordoñez."
      url="https://www.revistatotustuus.com/entrevistas/alejandro-ordonez"
      ogImage="/static/images/interviews/interview2/1.jpg"
    />
    <Header />
    <Interview2 />
    <Footer />
  </div>
);
