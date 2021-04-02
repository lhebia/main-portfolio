import React from 'react';
import { css } from '@emotion/core';

import SocialNav from '../SocialNav';
import { Wrapper  } from '../../styles/globalStyles';
import { StyledFooter, FooterP } from './footerStyles';

const Footer: React.FC<any> = () => {
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
            Made in Canada <span role="img" aria-label="Maple Leaf">🍁</span>
            {' '}&copy; { new Date().getFullYear() }
          </FooterP>
        </Wrapper>
      </StyledFooter>
    )
}

export default Footer;
