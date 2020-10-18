import React from 'react';
import styled from '@emotion/styled';

import { Wrapper, PageSection, SectionHeader, SectionSubHeader } from '../styles/globalStyles';
import { useStaticQuery, graphql } from 'gatsby';

const SkillsUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 1rem;
    li {
        text-align: center;
    }
    @media (max-width: 375px) {
        gap: 1rem;
    }
`;

export default function Skills() {

    const data = useStaticQuery(graphql`
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

    const skills = data.site.siteMetadata.skills;

    return (
        <Wrapper>
            <PageSection>
                <SectionHeader>Skills</SectionHeader>
                <SectionSubHeader>The skills I have - and continue - to work on.</SectionSubHeader>
                <SkillsUl>
                    {
                        skills.map((skill) => {
                            return (
                              <li>
                                <p>{skill.skillName}</p>
                              </li>
                              // <li>
                              //     <p>{skill.skillName}</p>
                              //     { skill.icon }
                              // </li>
                            )
                        })
                    }
                </SkillsUl>
            </PageSection>
        </Wrapper>
    )
}
