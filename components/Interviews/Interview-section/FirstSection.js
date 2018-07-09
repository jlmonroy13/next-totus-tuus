import React, { Component } from 'react';
import Link from 'next/link';
import Advertisement from '../../Advertisement.js';

class Section1 extends Component {
  render() {
    return (
      <div className="container container--largest">
        <div className="grid">
          <div className="grid__item four-fifths interview__main-container">
            <h2 className="interview__main-title interview__main-title--first">
              Sacerdotes / Religiosas
            </h2>
            <div className="interview__gallery-profile">
              <Link href="/entrevista/padre-angel-espinosa">
                <img
                  className="interview__gallery-image pointer"
                  src="/static/images/profile/profile-18.jpeg"
                  alt=""
                />
              </Link>
              <Link href="/entrevista/padre-angel-espinosa">
                <span className="interview__gallery-text pointer">
                  Padre Ángel Espinosa
                </span>
              </Link>
            </div>
            <div className="interview__gallery-profile">
              <Link href="/entrevista/hermana-ines-de-jesus">
                <img
                  className="interview__gallery-image pointer"
                  src="/static/images/profile/profile-12.jpeg"
                  alt=""
                />
              </Link>
              <Link href="/entrevista/hermana-ines-de-jesus">
                <span className="interview__gallery-text pointer">
                  Hermana Inés de Jesús
                </span>
              </Link>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Section1;
