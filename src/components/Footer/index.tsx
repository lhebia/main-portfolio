import React from 'react';

import SocialNav from '../SocialNav';

import "./styles.scss";

const Footer: React.FC<any> = () => {
    return (
      <footer className="footer-style">
        <div className="wrapper footer-wrap">
          <SocialNav flexJustification="flex-start"/>
          <p className="footer-text">
            Made in Canada <span role="img" aria-label="Maple Leaf">🍁</span>
            {' '}&copy; { new Date().getFullYear() }
          </p>
        </div>
      </footer>
    )
}

export default Footer;
