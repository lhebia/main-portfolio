import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // padding: 5rem;
`;

const HeroDiv = styled.div`
    text-align: center;
    width: 60%;
    padding: 5rem 0;
    @media (max-width: 500px) {
        width: 100%;
    }
`;

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
        <HeroDiv>
          <h2>{data.site.siteMetadata.hero.title}</h2>
          <p>{data.site.siteMetadata.hero.subTitle}</p>
          <p>{data.site.siteMetadata.hero.desc}</p>
        </HeroDiv>
      </HeroContainer>
    )
}
