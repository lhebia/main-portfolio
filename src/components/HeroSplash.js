import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';

import { siteVars } from '../styles/globalStyles';
import elnido from '../assets/elnido.jpg';

const SplashSection = styled.section`
    min-height: 60vh;
    background-color: ${siteVars.offWhite};
    background: url(${elnido});
    background-position: center;
    background-size: cover;
    display: grid;
    place-items: center;
`;

const HeroSplash = () => {

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                headTitle
            }
        }
    }
    `)

    return (
        <SplashSection>
            <p>{data.site.siteMetadata.headTitle}</p>
        </SplashSection>
    )
}

export default HeroSplash;