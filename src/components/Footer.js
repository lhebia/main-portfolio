import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

import { Wrapper, siteVars } from '../styles/globalStyles';

const FooterP = styled.p`
    text-align: center;
    padding: 1rem 0.5rem;
    display: block;
    font-size: 0.86rem;
`;

const FooterUl = styled.ul`
    display: flex;
    li {
        padding: 0.75rem;
        font-size: 1.5rem;
    }
`;

const Footer = () => {
    return (
      <footer
        css={css`
          background-color: ${siteVars.offWhite};
          padding: 2rem 0;
        `}
      >
        <Wrapper
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media (max-width: 550px) {
              flex-direction: column;
            }
          `}
        >
          <FooterUl>
            <li>
              <Link
                to="https://github.com/lhebia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </li>
            <li>
              <Link
                to="https://twitter.com/lhebia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </li>
            <li>
              <Link
                to="https://linkedin.com/in/lhebia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </li>
          </FooterUl>
          <FooterP>Handcrafted by me in twenty-twenty. </FooterP>
        </Wrapper>
      </footer>
    )
}

export default Footer;