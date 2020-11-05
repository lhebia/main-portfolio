import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';

import { SplashSection, SplashTitle } from '../styles/globalStyles';
import labeachsmall from '../assets/labeachsmall.jpg';
import bloghandsmallA from '../assets/bloghandsmallA.jpg';

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