import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';

import { siteVars } from '../styles/globalStyles';

const SplashSection = styled.section`
    min-height: 60vh;
    background-color: ${siteVars.offWhite};
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