import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import Typed from 'react-typed';

import { SplashSection, SplashTitle, SplashSubTitle, Wrapper } from '../../styles/globalStyles';
import lightskyblue from '../../assets/lightskyblue.jpg';
import bloghandsmallA from '../../assets/bloghandsmallA.jpg';

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
            <Wrapper
                css={css`
                    display: flex;
                    flex-direction: column;
                `}
            >
                <SplashTitle>{data.site.siteMetadata.headTitle}</SplashTitle>
                <SplashSubTitle>Front End Web Developer <span role="img" aria-label="Male Technologist">👨🏻‍💻</span></SplashSubTitle>
                <Typed 
                    style={{
                        color: "white",
                        fontSize: "1.5rem",
                        paddingTop: "1rem",
                        textAlign: "center",
                    }}
                    strings={['Please scroll']}
                    loop="true"
                    shuffle="true"
                    typeSpeed={100}
                />
            </Wrapper>
        </SplashSection>
    )
}

export default HeroSplash;