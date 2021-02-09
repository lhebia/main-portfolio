import React, { FunctionComponent } from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import { 
  AboutArticle, 
  AboutH3, 
  AboutP } from './styles';
import SocialNav from '../SocialNav';
import { PageSection } from '../../styles/globalStyles';

const About: FunctionComponent<any> = () => {

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
      <PageSection css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}>
        <AboutArticle>
          <AboutH3>{data.site.siteMetadata.hero.title}</AboutH3>
          <AboutP>{data.site.siteMetadata.hero.desc}</AboutP>
          <SocialNav flexJustification="center"/>
        </AboutArticle>
      </PageSection>
    )
}

export default About;
