import { graphql, useStaticQuery } from 'gatsby';

export const data = useStaticQuery(graphql`
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
