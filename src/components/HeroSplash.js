import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';

import { siteVars } from '../styles/globalStyles';
import labeachsmall from '../assets/labeachsmall.jpg';
import bloghandsmallA from '../assets/bloghandsmallA.jpg';

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

const HeroSplash = ({ pageType }) => {

    const [background, setBackground] = useState('');

    useEffect(() => {
        if (pageType === 'blog') {
            setBackground(bloghandsmallA);
        } else {
            setBackground(labeachsmall);
        }
    },[pageType])
    
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
            background-image: url(${background});        
        `}>
            <SplashTitle>{data.site.siteMetadata.headTitle}</SplashTitle>
        </SplashSection>
    )
}

export default HeroSplash;