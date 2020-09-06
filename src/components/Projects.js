import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Wrapper, PageSection, SectionHeader, siteVars } from '../styles/globalStyles';

const ProjectUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    li {
        padding: 1rem 0;
        text-align: center;
    }
    img {
        border-radius: 5px 5px 5px 5px;
        transition: all .6s;
        opacity: 0.46;
        &:hover,
        &:focus {
            transform: scale(1.1);
            opacity: 1;
        }
    }
    p {
        line-height: 1.4rem;
    }
    a {
        font-weight: bold;
        color: ${siteVars.mainHighlight};
        &:hover,
        &:focus {
            text-decoration: underline;
        }
    }
`;

const ProjectTitle = styled.p`
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.05rem;
    font-size: 1.6rem;
    line-height: 2.2rem;
    padding: 1rem 0;
`;

const TechStack = styled.p`
    font-family: 'Ubuntu', sans-serif;
    line-height: 1.6rem;
    letter-spacing: 0.09rem;
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
                            const stack = project.tech.join(' | ');
                            
                            return (
                                <li key={project.title}>
                                    <div css={css`
                                        overflow: hidden;
                                        border-radius: 5px 5px 5px 5px;
                                    `}>
                                        <Link to={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <img src={project.imgName} alt={project.desc} />
                                        </Link>
                                    </div>
                                    <ProjectTitle>{project.title}</ProjectTitle>
                                    <TechStack>{ stack }</TechStack>
                                    <p>{project.desc}</p>
                                    <p><Link to={project.liveUrl} target="_blank" rel="noopener noreferrer">Live</Link> | <Link to={project.githubUrl} target="_blank" rel="noopener noreferrer">Github</Link></p>
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