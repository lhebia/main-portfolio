import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import { siteVars, LinkLikeButton } from '../styles/globalStyles';
import SocialNav from './SocialNav';

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    text-align: center;
    width: 75%;
    max-width: 1200px;
    padding: 6rem 0 3rem;
    @media (max-width: 500px) {
      width: 100%;
      padding: 4rem 1rem;
    }
    h2 {
      font-size: 4rem;
      line-height: 4.2rem;
      padding: 0.5rem;
      @media (max-width: 420px) {
        font-size: 2.4rem;
        line-height: 2.6rem;
      }
    }
    h3 {
      font-size: 2.4rem;
      line-height: 2.6rem;
      color: ${siteVars.mainHighlight};
      padding: 0.5rem 0;
      @media (max-width: 420px) {
        font-size: 1.8rem;
        line-height: 2rem;
      }
    }
    p {
      font-size: 1.2rem;
      line-height: 1.8rem;
      padding: 0.5rem;
      @media (max-width: 500px) {
        padding: 0.2rem;
        font-size: 1rem;
      }
    }
  }
`

export default function About() {

    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            hero {
              title
              subTitle
              desc
            }
          }
        }
      }
    `)

    return (
      <AboutContainer>
        <div>
          <h2>{data.site.siteMetadata.hero.title}</h2>
          <h3>{data.site.siteMetadata.hero.subTitle}</h3>
          <p>{data.site.siteMetadata.hero.desc}</p>
          <SocialNav flexJustification="center"/>
          <LinkLikeButton 
            css={css`
              display: inline-block;
              padding: 1rem;
              margin: 0.5rem auto;
            `}
            href={'Lawrence-Hebia-Resume-2020-1-3.pdf'}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </LinkLikeButton>
        </div>
      </AboutContainer>
    )
}
