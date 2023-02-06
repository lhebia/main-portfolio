import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { HeadProps } from '../../types/types';

const Head: React.FC<HeadProps> = ({ title }): ReactElement => {
    
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
            headTitle
        }
      }
    }
  `)

  console.log('2 CORINTHIANS 12:9');

  return (
    <Helmet 
      title={`${title} | ${data.site.siteMetadata.headTitle}`} 
    />
  )
}

export default Head;
