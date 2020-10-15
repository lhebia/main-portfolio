import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';

import { siteVars } from '../styles/globalStyles';
// import elnido from '../assets/elnido.jpg';

const SplashSection = styled.section`
    min-height: 75vh;
    background-color: ${siteVars.lightGrey};
    background-position: center;
    background-size: cover;
    display: grid;
    place-items: center;
    padding: 0 10%;
    position: relative;
`;

const SplashTitle = styled.p`
  font-size: 7rem;
  color: white;
  @media (max-width: 768px) {
    font-size: 5rem;
  }
  @media (max-width: 450px) {
    font-size: 3rem;
    text-align: center;
  }
`

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
            <SplashTitle>{data.site.siteMetadata.headTitle}</SplashTitle>
        </SplashSection>
    )
}

export default HeroSplash;