import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Wrapper, PageSection, SectionHeader, siteVars, SectionSubHeader, TechStack } from '../styles/globalStyles';

const ProjectUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  li {
    padding: 0 0 1rem 0;
    text-align: left;
    box-shadow: ${siteVars.boxShadow};
    border-radius: 5px 5px 5px 5px;
  }
  img {
    border-radius: 5px 5px 0px 0px;
    transition: all 0.6s;
    opacity: 1;
    &:hover,
    &:focus {
      transform: scale(1.1);
      opacity: 0.46;
    }
  }
  p {
    line-height: 1.4rem;
  }
  p:last-of-type {
    padding-top: 0.5rem;
  }
`

const ProjectLink = styled.a`
  font-weight: bold;
  color: ${siteVars.mainHighlight};
  &:hover,
  &:focus {
    opacity: 0.4;
  }
`;

const ProjectTitle = styled.p`
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.05rem;
  font-size: 1.6rem;
  line-height: 2.2rem;
  padding: 1rem 0;
`;

const TextCard = styled.div`
  padding: 1rem;
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
                <SectionSubHeader>A few of the things I've been working on.</SectionSubHeader>
                <ProjectUl>
                    {
                        projectList.map((project) => {
                            const stack = project.tech.join(' | ');
                            
                            return (
                                <li key={project.title}>
                                    <div css={css`
                                        overflow: hidden;
                                        border-radius: 5px 5px 0px 0px;
                                    `}>
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <img src={project.imgName} alt={project.desc} />
                                        </a>
                                    </div>
                                    <TextCard>
                                      
                                      <ProjectTitle>
                                        <ProjectLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        {project.title}
                                        </ProjectLink>
                                      </ProjectTitle>
                                      <TechStack>{ stack }</TechStack>
                                      <p>{project.desc}</p>
                                      <p><ProjectLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live</ProjectLink> | <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">Github</ProjectLink></p>
                                    </TextCard>
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