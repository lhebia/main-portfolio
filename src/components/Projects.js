import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import { Wrapper } from '../styles/globalStyles';

const Projects = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    projects {
                        title
                        tech
                        desc
                        shortDesc
                        liveUrl
                        githubUrl
                    }
                }
            }
        }
    `);

    const projectList = data.site.siteMetadata.projects;

    return (
        <Wrapper>
            <h4>Projects</h4>
            <ul>
                {
                    projectList.map( (project) => {
                        return (
                            <li>
                                <p>{ project.title }</p>
                                <p>{ project.desc }</p>
                                <p><Link to={project.liveUrl}>Live</Link> | <Link to={project.githubUrl}>Github</Link></p>
                            </li>
                        )
                    })
                }
            </ul>
        </Wrapper>
    )
}

export default Projects;