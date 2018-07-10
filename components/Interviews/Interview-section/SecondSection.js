import React, { Component } from 'react';
import Link from 'next/link';
import Advertisement from '../../Advertisement.js';

class Section2 extends Component {
  render() {
    return (
      <div className="container container--largest">
        <div className="grid">
          <div className="grid__item four-fifths interview__main-container">
            <h2 className="interview__main-title interview__main-title--second">
              Músicos Católicos
            </h2>
            <div className="interview__gallery">
              <div className="interview__gallery-profile">
                <Link href="/entrevistas/luna-eikar">
                  <img
                    className="interview__gallery-image pointer"
                    src="/static/images/profile/profile-4.jpeg"
                    alt=""
                  />
                </Link>
                <Link href="/entrevistas/luna-eikar">
                  <span className="interview__gallery-text pointer">
                    Luna Eikar
                  </span>
                </Link>
              </div>
              <div className="interview__gallery-profile">
                <Link href="/entrevistas/celines-diaz">
                  <img
                    className="interview__gallery-image pointer"
                    src="/static/images/profile/profile-3.jpeg"
                    alt=""
                  />
                </Link>
                <Link href="/entrevistas/celines-diaz">
                  <span className="interview__gallery-text pointer">
                    Celinés Díaz
                  </span>
                </Link>
              </div>
              <div className="interview__gallery-profile">
                <Link href="/entrevistas/son-by-4">
                  <img
                    className="interview__gallery-image pointer"
                    src="/static/images/profile/profile-13.jpeg"
                    alt=""
                  />
                </Link>
                <Link href="/entrevistas/son-by-4">
                  <span className="interview__gallery-text pointer">
                    Son By 4{' '}
                  </span>
                </Link>
              </div>
              <div className="interview__gallery-profile">
                <Link href="/entrevistas/joan-sanchez">
                  <img
                    className="interview__gallery-image pointer"
                    src="/static/images/profile/profile-10.jpeg"
                    alt=""
                  />
                </Link>
                <Link href="/entrevistas/joan-sanchez">
                  <span className="interview__gallery-text interview__gallery-text-space">
                    Joan Sanchez{' '}
                  </span>
                </Link>
              </div>
              <div className="interview__gallery-profile">
                <Link href="/entrevistas/jesse-demara">
                  <img
                    className="interview__gallery-image pointer"
                    src="/static/images/profile/profile-8.jpeg"
                    alt=""
                  />
                </Link>
                <Link href="/entrevistas/jesse-demara">
                  <span className="interview__gallery-text pointer">
                    Jesse Demara
                  </span>
                </Link>
              </div>
              <div className="interview__gallery-profile">
                <Link href="/entrevistas/dumas-y-mary">
                  <img
                    className="interview__gallery-image pointer interview__gallery-image--increase"
                    src="/static/images/profile/profile-17.jpeg"
                    alt=""
                  />
                </Link>
                <Link href="/entrevistas/dumas-y-mary">
                  <span className="interview__gallery-text pointer">
                    Dumas y Mary
                  </span>
                </Link>
              </div>
              <div className="interview__gallery-profile">
                <Link href="/entrevistas/pablo-martinez">
                  <img
                    className="interview__gallery-image pointer interview__gallery-image--increase"
                    src="/static/images/profile/profile-19.JPG"
                    alt=""
                  />
                </Link>
                <Link href="/entrevistas/pablo-martinez">
                  <span className="interview__gallery-text pointer">
                    Pablo Martinez
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
          </div>
        </div>
      </div>
    );
  }
}

export default Section2;
