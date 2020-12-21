import { useStaticQuery, graphql } from 'gatsby';

export const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                skills {
                    icon
                    skillName
                }
            }
        }
    }
`);
