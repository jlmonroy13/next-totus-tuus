import React, { Component } from 'react';
import Link from 'next/link';
import Advertisement from '../../Advertisement.js';

class Section3 extends Component {
  render() {
    return (
      <div className="container container--largest">
        <div className="grid">
          <div className="grid__item four-fifths interview__main-container">
            <h2 className="interview__main-title interview__main-title--third">
              Testimonios de Conversión
            </h2>
            <div className="interview__gallery">
              <div className="interview__gallery-profile">
                <Link href="/entrevistas/rochi-stevenson">
                  <img
                    className="interview__gallery-image pointer"
                    src="/static/images/profile/profile-1.jpeg"
                    alt=""
                  />
                </Link>
                <Link href="/entrevistas/rochi-stevenson">
                  <span className="pointer">
                    <span className="interview__gallery-text interview__gallery-text--one">
                      Rochi Stevenson{' '}
                    </span>
                    <span className="interview__gallery-text interview__gallery-text--retract">
                      Presentadora de televisión
                    </span>
                  </span>
                </Link>
              </div>
              <div className="interview__gallery-profile">
                <Link href="/entrevistas/amada-rosa-perez">
                  <img
                    className="interview__gallery-image pointer interview__gallery-image--increase"
                    src="/static/images/profile/profile-16.jpeg"
                    alt=""
                  />
                </Link>
                <Link href="/entrevistas/amada-rosa-perez">
                  <span className="pointer">
                    <span className="interview__gallery-text interview__gallery-text--one">
                      Amada Rosa Perez{' '}
                    </span>
                    <span className="interview__gallery-text interview__gallery-text--two">
                      Ex Actriz y Modelo
                    </span>
                  </span>
                </Link>
              </div>
              <div className="interview__gallery-profile">
                <Link href="/entrevistas/wilson-lopez">
                  <img
                    className="interview__gallery-image pointer"
                    src="/static/images/profile/profile-5.jpeg"
                    alt=""
                  />
                </Link>
                <Link href="/entrevistas/wilson-lopez">
                  <span className="pointer">
                    <span className="interview__gallery-text interview__gallery-text--expand">
                      {' '}
                      Wilson Lopez
                    </span>
                    <span className="interview__gallery-text interview__gallery-text--two">
                      {' '}
                      Ex Satánico
                    </span>
                  </span>
                </Link>
              </div>
              <div className="interview__gallery-profile">
                <Link href="/entrevistas/alejandro-ordonez">
                  <img
                    className="interview__gallery-image pointer"
                    src="/static/images/profile/profile-2.jpeg"
                    alt=""
                  />
                </Link>
                <Link href="/entrevistas/alejandro-ordonez">
                  <span className="pointer">
                    <span className="interview__gallery-text interview__gallery-text--one">
                      Alejandro Ordoñez Maldonado
                    </span>
                    <span className="interview__gallery-text interview__gallery-text--retract-two">
                      Ex Procurador de la Nacion
                    </span>
                  </span>
                </Link>
              </div>
              <div className="interview__gallery-profile">
                <Link href="/entrevistas/juan-manuel-cotelo">
                  <img
                    className="interview__gallery-image pointer interview__gallery-image--increase"
                    src="/static/images/profile/profile-11.jpeg"
                    alt=""
                  />
                </Link>
                <Link href="/entrevistas/juan-manuel-cotelo">
                  <span className="pointer">
                    <span className="interview__gallery-text interview__gallery-text--one">
                      Juan Manuel Cotelo
                    </span>
                    <span className="interview__gallery-text interview__gallery-text--retract-two">
                      Productor de cine católico
                    </span>
                  </span>
                </Link>
              </div>
              <div className="interview__gallery-profile">
                <Link href="/entrevistas/maria-angelica">
                  <img
                    className="interview__gallery-image pointer"
                    src="/static/images/profile/profile-7.jpeg"
                    alt=""
                  />
                </Link>
                <Link href="/entrevistas/maria-angelica">
                  <span className="pointer">
                    <span className="interview__gallery-text interview__gallery-text--one">
                      María Angélica Araujo
                    </span>
                    <span className="interview__gallery-text interview__gallery-text--retract-two">
                      Esposa de Felipe Gomez cantante católico
                    </span>
                  </span>
                </Link>
              </div>
              <div className="interview__gallery-profile">
                <Link href="/entrevistas/felipe-arias">
                  <img
                    className="interview__gallery-image pointer"
                    src="/static/images/profile/profile-6.jpeg"
                    alt=""
                  />
                </Link>
                <Link href="/entrevistas/felipe-arias">
                  <span className="pointer">
                    <span className="interview__gallery-text interview__gallery-text--one">
                      Felipe Arias
                    </span>
                    <span className="interview__gallery-text interview__gallery-text--retract-two">
                      Periodista
                    </span>
                  </span>
                </Link>
              </div>

              <div className="interview__gallery-profile">
                <Link href="/entrevistas/ruben-garcia">
                  <img
                    className="interview__gallery-image pointer"
                    src="/static/images/profile/profile-9.jpeg"
                    alt=""
                  />
                </Link>
                <Link href="/entrevistas/ruben-garcia">
                  <span className="pointer">
                    <span className="interview__gallery-text interview__gallery-text interview__gallery-text--expand">
                      Ruben Garcia
                    </span>
                    <span className="interview__gallery-text interview__gallery-text interview__gallery-text--two">
                      Un homosexual alcanzado por la
                    </span>
                    <span className="interview__gallery-text interview__gallery-text interview__gallery-text--three">
                      misericordia de Dios
                    </span>
                  </span>
                </Link>
              </div>
              <div className="interview__gallery-profile">
                <Link href="/entrevistas/ricardo-castanon">
                  <img
                    className="interview__gallery-image pointer interview__gallery-image--increase"
                    src="/static/images/profile/profile-15.jpeg"
                    alt=""
                  />
                </Link>
                <Link href="/entrevistas/ricardo-castanon">
                  <span className="pointer">
                    <span className="interview__gallery-text interview__gallery-text--one">
                      Ricardo Castañon
                    </span>
                    <span className="interview__gallery-text interview__gallery-text--two">
                      Científico Boliviano
                    </span>
                  </span>
                </Link>
              </div>
              <div className="interview__gallery-profile">
                <Link href="/entrevistas/fernando-casanova">
                  <img
                    className="interview__gallery-image pointer interview__gallery-image--increase"
                    src="/static/images/profile/profile-14.jpeg"
                    alt=""
                  />
                </Link>
                <Link href="/entrevistas/fernando-casanova">
                  <span className="pointer">
                    <span className="interview__gallery-text interview__gallery-text">
                      Fernando Casanova
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid__item one-fifth">
            <Advertisement />
            <div className="advertisement__description advertisement__description-second">
              <span className="advertisement__text">
                TUS CLIENTES PUEDEN SER NUESTROS LECTORES
              </span>
              <span className="advertisement__subtext"> PAUTA AQUI</span>
              <span className="advertisement__subtext"> MAYOR INFO</span>
              <span className="advertisement__subtext">
                {' '}
                <a href="mailto:totustuus1207@gmail.com">
                  TOTUSTUUS1207@GMAIL.COM
                </a>
              </span>
            </div>
            <div className="advertisement__image advertisement__image--alternative" />
            <div className="advertisement__description advertisement__description-second">
              <span className="advertisement__text">
                TUS CLIENTES PUEDEN SER NUESTROS LECTORES
              </span>
              <span className="advertisement__subtext"> PAUTA AQUI</span>
              <span className="advertisement__subtext"> MAYOR INFO</span>
              <span className="advertisement__subtext">
                {' '}
                <a href="mailto:totustuus1207@gmail.com">
                  TOTUSTUUS1207@GMAIL.COM
                </a>
              </span>
            </div>
            <div className="advertisement__image advertisement__image--alternative" />
            <div className="advertisement__description advertisement__description-second">
              <span className="advertisement__text">
                TUS CLIENTES PUEDEN SER NUESTROS LECTORES
              </span>
              <span className="advertisement__subtext"> PAUTA AQUI</span>
              <span className="advertisement__subtext"> MAYOR INFO</span>
              <span className="advertisement__subtext">
                {' '}
                <a href="mailto:totustuus1207@gmail.com">
                  TOTUSTUUS1207@GMAIL.COM
                </a>
              </span>
            </div>
            <div className="advertisement__image advertisement__image--alternative" />
          </div>
        </div>
      </div>
    );
  }
}

export default Section3;
