import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';

import { siteVars } from '../styles/globalStyles';
import labeach from '../assets/labeach.jpg';

const SplashSection = styled.section`
    min-height: 85vh;
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
  text-align: center;
  @media (max-width: 768px) {
    font-size: 5rem;
  }
  @media (max-width: 450px) {
    font-size: 3rem;
    // text-align: center;
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
        <SplashSection css={css`
            background-image: url(${labeach});        
        `}>
            <SplashTitle>{data.site.siteMetadata.headTitle}</SplashTitle>
        </SplashSection>
    )
}

export default HeroSplash;