import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';

import { TextCard, ProjectTitle, ProjectLink, ProjectUl } from './styles';
import { Wrapper, PageSection, SectionHeader, SectionSubHeader, TechStack } from '../../styles/globalStyles';

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
                                <li key={project.title}
                                    css={css`
                                        border: 1px solid #ededed;
                                    `}
                                >
                                  <article>
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
                                  </article>
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