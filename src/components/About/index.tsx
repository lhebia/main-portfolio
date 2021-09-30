import React, { FunctionComponent } from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import SocialNav from '../SocialNav';

import "./styles.scss";

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

  const { title, desc } = data.site.siteMetadata.hero;

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
