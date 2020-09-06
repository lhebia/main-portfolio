import React from 'react';
import styled from '@emotion/styled';

import { Wrapper, PageSection, SectionHeader } from '../styles/globalStyles';
import { useStaticQuery, graphql } from 'gatsby';

const SkillsUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
                <SkillsUl>
                    {
                        skills.map((skill) => {
                            return (
                                <li>
                                    <p>{skill.skillName}</p>
                                    { skill.icon }
                                </li>
                            )
                        })
                    }
                </SkillsUl>
            </PageSection>
        </Wrapper>
    )
}
