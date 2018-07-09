import React, { Component } from 'react';
import Link from 'next/link';
import Social from './Social.js';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container container--large">
          <Social />
          <div className="header__caption">
            <p className="header__text">
              "Mi pasado, Señor, lo confío a tu misericordia, mi presente a tu
              amor, mi futuro a tu providencia.” San Pío de Pietrecina
            </p>
          </div>
          <Link href="/">
            <img
              className="header__image pointer"
              src="/static/images/logo.png"
              alt="user face"
            />
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
