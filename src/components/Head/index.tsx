import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export interface HeadProps {
    title: string,
}

const Head: React.FC<HeadProps> = ({ title }) => {
    
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
