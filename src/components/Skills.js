import React from 'react';
import styled from '@emotion/styled';

import { FaHtml5 } from 'react-icons/fa';
import { Wrapper, PageSection, SectionHeader, SectionSubHeader, TechStack } from '../styles/globalStyles';
import { useStaticQuery, graphql } from 'gatsby';

const SkillsUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1rem;
    li {
        text-align: center;
    }
    @media (max-width: 375px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
`;

const SkillsLi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
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
                <SectionSubHeader>The things I love to learn about and work on everyday.</SectionSubHeader>
                <SkillsUl>
                    {
                        skills.map(({ skillName }) => {
                            return (
                              <SkillsLi>
                                <FaHtml5/>
                                <TechStack>{skillName}</TechStack>
                              </SkillsLi>
                            )
                        })
                    }
                </SkillsUl>
            </PageSection>
        </Wrapper>
    )
}
