import React, { ReactElement } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SocialNav from '../SocialNav';
import "./styles.scss";
import { AboutData } from '../../types/types';

const About: React.FC<any> = (): ReactElement => {

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

  const { title, desc }: AboutData = data.site.siteMetadata.hero;

  return (
    <section className="page-section about-section" id="main">
      <article className="about-article">
        <h3 className="about-heading">{ title }</h3>
        <p className="about-text">{ desc }</p>
        <SocialNav flexJustification="center"/>
      </article>
    </section>
  )
}

export default About;
