import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { AboutContainer, AboutArticle, AboutH3, AboutP } from './AboutContainer';
import SocialNav from '../SocialNav';

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
    `);

    return (
      <AboutContainer>
        <AboutArticle>
          <AboutH3>{data.site.siteMetadata.hero.title}</AboutH3>
          <AboutP>{data.site.siteMetadata.hero.desc}</AboutP>
          <SocialNav flexJustification="center"/>
        </AboutArticle>
      </AboutContainer>
    )
}
