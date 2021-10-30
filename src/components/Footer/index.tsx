import React, { ReactElement } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SocialNav from '../SocialNav';
import { FooterText } from '../../types/types';
import "./styles.scss";

const Footer: React.FC<React.FC> = (): ReactElement => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          footerText
        }
      }
    }
  `);

  const { footerText }: FooterText = data.site.siteMetadata;

  return (
    <footer className="footer-style">
      <div className="wrapper footer-wrap">
        <SocialNav flexJustification="flex-start"/>
        <p className="footer-text">
          { footerText } <span role="img" aria-label="Maple Leaf">🍁</span>
          {' '}&copy; { new Date().getFullYear() }
        </p>
      </div>
    </footer>
  )
}

export default Footer;
