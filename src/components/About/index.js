import React from 'react';

import { data } from './query';
import { AboutContainer, AboutArticle, AboutH3, AboutP } from './AboutContainer';
import SocialNav from '../SocialNav';

export default function About() {

  return (
    <AboutContainer>
      <AboutArticle>
        <AboutH3>{data.site.siteMetadata.hero.title}</AboutH3>
        <AboutP>{data.site.siteMetadata.hero.desc}</AboutP>
        <SocialNav flexJustification="center"/>
      </AboutArticle>
    </AboutContainer>
  )
};
