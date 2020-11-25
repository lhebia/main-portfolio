import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';

import { SplashSection, SplashTitle, SplashSubTitle } from '../styles/globalStyles';
import lightskyblue from '../assets/lightskyblue.jpg';
import bloghandsmallA from '../assets/bloghandsmallA.jpg';

const HeroSplash = ({ pageType }) => {

    const [background, setBackground] = useState('');

    useEffect(() => {
        if (pageType === 'blog') {
            setBackground(bloghandsmallA);
        } else {
            setBackground(lightskyblue);
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
            <SplashSubTitle>Front End Web Developer <span role="img" aria-label="Male Technologist">👨🏻‍💻</span></SplashSubTitle>
        </SplashSection>
    )
}

export default HeroSplash;