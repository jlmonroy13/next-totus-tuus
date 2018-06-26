import React, { Component } from 'react';
import Link from 'next/link';
import Carousel from './Carousel.js';

class Home extends Component {
  render() {
    return (
      <div className="container container--max">
        <div className="grid main">
          <div className="grid__item one-third">
            <Carousel
              images={[
                '/static/images/publi1.jpg',
                '/static/images/publi2.jpg',
                '/static/images/publi3.jpg'
              ]}
            />
            <a href="/static/pdf_ediciones/018.pdf" target="_blank">
              <div className="main__magazine">
                <img
                  className="main__image"
                  src="/static/images/edition-images/18.jpg"
                  alt=""
                />
              </div>
            </a>
          </div>

          <div className="grid__item one-third">
            <div className="main__menu">
              <Link className="main__menu-text-link" to="quienes-somos">
                <div className="main__menu-section main__menu-section--blue-dark">
                  <h2 className="main__menu-text main__menu-text--about">
                    ¿Quienes Somos?
                  </h2>
                </div>
              </Link>
              <Link className="main__menu-text-link" to="ediciones">
                <div className="main__menu-section main__menu-section--blue-light">
                  <h2 className="main__menu-text main__menu-text--editions">
                    Ediciones
                  </h2>
                </div>
              </Link>
              <Link className="main__menu-text-link" to="entrevistas">
                <div className="main__menu-section main__menu-section--blue-cloud">
                  <h2 className="main__menu-text main__menu-text--interviews">
                    Entrevistas Exclusivas de TOTUS TUUS
                  </h2>
                </div>
              </Link>
              <div className="main__menu-section main__menu-section--blue-deep">
                <h2 className="main__menu-text main__menu-text--contact">
                  <span>Contacto</span>
                </h2>
              </div>
            </div>
            <div className="main__client">
              <div className="main__client-promo">
                <span className="main__client-promo-text">
                  TUS CLIENTES PUEDEN SER NUESTROS LECTORES
                </span>
                <span className="main__client-promo-subtext main__client-promo-subtext-space">
                  {' '}
                  PAUTA AQUI
                </span>
                <span className="main__client-promo-subtext"> MAYOR INFO</span>
                <span className="main__client-promo-subtext">
                  {' '}
                  TOTUSTUUS1207@GMAIL.COM
                </span>
              </div>
              <div className="main__client-contact" />
            </div>
            <div className="main__client-info">
              <span className="main__client-text">totustuus1207@gmail.com</span>
              <span> +57 3012784279</span>
              <span> Barranquilla - Colombia</span>
            </div>
          </div>

          <div className="grid__item one-third">
            <a href="/static/pdf_ediciones/019.pdf" target="_blank">
              <div className="main__magazine">
                <img
                  className="main__image main__image--m0"
                  src="/static/images/edition-images/image_19.JPG"
                  alt=""
                />
              </div>
            </a>
            <div className="main__advertisement">
              <img
                className="main__advertisement-image"
                src="/static/images/Comprar.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
