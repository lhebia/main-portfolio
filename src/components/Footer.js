import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import SocialNav from './SocialNav';
import { Wrapper, siteVars } from '../styles/globalStyles';

const FooterP = styled.p`
    text-align: center;
    padding: 1rem 0.5rem;
    display: block;
    font-size: 0.86rem;
`;

const Footer = () => {
    return (
      <footer
        css={css`
          background-color: ${siteVars.offWhite};
          padding: 2rem 0;
          margin-top: 2rem;
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
          <SocialNav flexJustification="flex-start"/>
          <FooterP>
            Handcrafted with <a href="https://gatsbyjs.com" target="_blank"
                rel="noopener noreferrer"> Gatsby </a> in twenty-twenty.
          </FooterP>
        </Wrapper>
      </footer>
    )
}

export default Footer;