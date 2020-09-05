import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Wrapper } from '../styles/globalStyles';

const FooterP = styled.p`
    text-align: center;
    padding: 1rem 0.5rem;
    display: block;
    font-size: 0.86rem;
`;

const FooterUl = styled.ul`
    display: flex;
    li {
        padding: 0.5rem;
    }
`;

const Footer = () => {
    return (
        <footer>
            <Wrapper css={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
            `}>
                <FooterUl>
                    <li>Github</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                </FooterUl>
                <FooterP>Handcrafted by me in twenty-twenty. </FooterP>
            </Wrapper>
        </footer>
    )
}

export default Footer;