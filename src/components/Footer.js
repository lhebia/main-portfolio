import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Wrapper } from '../styles/globalStyles';

const FooterP = styled.p`
    text-align: center;
    padding: 1rem 0;
    display: block;
    font-size: 0.86rem;
`;

const Footer = () => {
    return (
        <footer>
            <Wrapper css={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
            `}>
                <FooterP>Something else.</FooterP>
                <FooterP>Handcrafted with Gatsby & Emotion in Twenty-twenty. </FooterP>
            </Wrapper>
        </footer>
    )
}

export default Footer;