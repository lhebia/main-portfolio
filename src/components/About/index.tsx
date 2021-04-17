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

  return (
    <section className="page-section about-section" id="main">
      <article className="about-article">
        <h3 className="about-heading">{data.site.siteMetadata.hero.title}</h3>
        <p className="about-text">{data.site.siteMetadata.hero.desc}</p>
        <SocialNav flexJustification="center"/>
      </article>
    </section>
  )
}

export default About;
