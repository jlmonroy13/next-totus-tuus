import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="social social--footer">
        <a
          href="https://www.facebook.com/revistatotustuus/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social__icon"
            src="/static/images/logos/face.png"
            alt="Facebook logo"
          />
        </a>
        <a
          href="https://www.instagram.com/revistatotustuus/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social__icon"
            src="/static/images/logos/insta.png"
            alt="Instagram logo"
          />
        </a>
      </div>
    );
  }
}

export default Footer;
