import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { siteVars } from '../styles/globalStyles';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${siteVars.offWhite};
  div {
    text-align: center;
    width: 75%;
    max-width: 1200px;
    padding: 6rem 0;
    @media (max-width: 500px) {
      width: 100%;
      padding: 1rem;
    }
    // @media (max-width: 420px) {
    //   padding: 1rem;
    // }
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
    }
  }
`

export default function Hero() {

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
      <HeroContainer>
        <div>
          <h2>{data.site.siteMetadata.hero.title}</h2>
          <h3>{data.site.siteMetadata.hero.subTitle}</h3>
          <p>{data.site.siteMetadata.hero.desc}</p>
        </div>
      </HeroContainer>
    )
}
