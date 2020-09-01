import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

import { Wrapper, PageSection, SectionHeader } from '../styles/globalStyles';
import dc from '../assets/projects/dc.jpg';
import fp from "../assets/projects/fp.jpg";
import mw from "../assets/projects/mw.jpg";
import na from "../assets/projects/na.jpg";
import pg from "../assets/projects/pg.jpg";
import ta from "../assets/projects/ta.jpg";

const ProjectUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`;

const Projects = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    projects {
                        title
                        imgName
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
            <PageSection>
                <SectionHeader>Projects</SectionHeader>
                <ProjectUl>
                    {
                        projectList.map((project) => {
                            return (
                                <li>
                                    {/* <img src={image} alt={project.desc} /> */}
                                    <p>{project.title}</p>
                                    <p>{project.desc}</p>
                                    <p><Link to={project.liveUrl}>Live</Link> | <Link to={project.githubUrl}>Github</Link></p>
                                </li>
                            )
                        })
                    }
                </ProjectUl>
            </PageSection>
        </Wrapper>
    )
}

export default Projects;