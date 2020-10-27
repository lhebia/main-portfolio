import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import { siteVars, LinkLikeButton } from '../styles/globalStyles';

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
      line-height: 4.6rem;
      @media (max-width: 420px) {
        font-size: 2.4rem;
        line-height: 3rem;
      }
    }
    h3 {
      font-size: 2.4rem;
      line-height: 3rem;
      color: ${siteVars.mainHighlight};
      padding: 1rem 0;
    }
    p {
      font-size: 1.2rem;
      line-height: 1.8rem;
      padding: 2rem;
      @media (max-width: 500px) {
        padding: 0.2rem;
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
          <LinkLikeButton css={css`
            display: block;
            width: 8rem;
            margin: 1rem auto;
          `}href="#Contact">Contact Me</LinkLikeButton>
        </div>
      </AboutContainer>
    )
}
