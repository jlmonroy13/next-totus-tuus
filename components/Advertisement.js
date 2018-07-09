import React, { Component } from 'react';

class Advertisement extends Component {
  render() {
    return (
      <div>
        <div className="advertisement__image" />
        <div className="advertisement__description">
          <span className="advertisement__text">
            TUS CLIENTES PUEDEN SER NUESTROS LECTORES
          </span>
          <span className="advertisement__subtext"> PAUTA AQUI</span>
          <span className="advertisement__subtext"> MAYOR INFO</span>
          <span className="advertisement__subtext">
            {' '}
            <a href="mailto:totustuus1207@gmail.com">TOTUSTUUS1207@GMAIL.COM</a>
          </span>
        </div>
      </div>
    );
  }
}

export default Advertisement;
