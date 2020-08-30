import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { siteVars } from '../styles/globalStyles';

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // padding: 5rem;
`;

const HeroDiv = styled.div`
    text-align: center;
    width: 75%;
    padding: 5rem 0;
    @media (max-width: 500px) {
        width: 100%;
    }
`;

const HeroH2 = styled.div`
    font-size: 4rem;
    line-height: 4.6rem;
`;

const HeroSub = styled.p`
    font-size: 2.4rem;
    line-height: 3rem;
    color: ${siteVars.mainHighlight};
    padding: 1rem 0;
`;

const HeroP = styled.p`
    font-size: 1.2rem;
    line-height: 1.8rem;
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
          <HeroH2>{data.site.siteMetadata.hero.title}</HeroH2>
          <HeroSub>{data.site.siteMetadata.hero.subTitle}</HeroSub>
          <HeroP>{data.site.siteMetadata.hero.desc}</HeroP>
        </HeroDiv>
      </HeroContainer>
    )
}
