import React from 'react';
import styled from '@emotion/styled';

const CenteredP = styled.p`
    text-align: center;
`;

const Footer = () => {
    return (
        <footer>
            <CenteredP>This is the footer, in 2020.</CenteredP>
        </footer>
    )
}

export default Footer;