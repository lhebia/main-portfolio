import React from 'react';
import { css } from '@emotion/core';

import SocialNav from '../SocialNav';
import { Wrapper  } from '../../styles/globalStyles';
import { StyledFooter, FooterP } from './footerStyles';

const Footer = () => {
    return (
      <StyledFooter>
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
                rel="noopener noreferrer"> Gatsby </a> in {new Date().getFullYear()}.
          </FooterP>
        </Wrapper>
      </StyledFooter>
    )
}

export default Footer;
