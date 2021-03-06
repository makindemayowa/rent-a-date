import React from 'react';

const Footer = () => (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l12 s12">
          <div className="social">
            <span className="log">
            Follow us on social media
            </span>
            <span className="point fb social_log">
              <i className="fab fa-facebook-f" />
            </span>
            <span className="point social_log twi">
              <i className="fab fa-twitter" aria-hidden="true" />
            </span>
            <span className="point social_log goog">
              <i className="fab fa-google" aria-hidden="true" />
            </span>
          </div>
        </div>
        <div className="col l4 m4 s4">
          <h6 className="white-text">COMPANY</h6>
          <ul>
            <li><a className="grey-text text-lighten-3" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="col l4 m4 s4">
          <h6 className="white-text">COMMUNITY</h6>
          <ul>
            <li><a className="grey-text text-lighten-3" href="#!">Blog</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Support</a></li>
          </ul>
        </div>
        <div className="col l4 m4 s4">
          <h6 className="white-text">LEGAL</h6>
          <ul>
            <li><a className="grey-text text-lighten-3" href="#!">Privacy</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Terms</a></li>
            <li><a className="grey-text text-lighten-3" href="/safety">Safety</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright center">
      <div className="container">
        © 2018 Rent-a-Date
      </div>
    </div>
  </footer>
)

export default Footer;