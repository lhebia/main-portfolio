import React from 'react';
import styled from '@emotion/styled';

import { Wrapper, PageSection, SectionHeader, SectionSubHeader, TechStack } from '../styles/globalStyles';
import { useStaticQuery, graphql } from 'gatsby';
import { BsCode } from 'react-icons/bs';

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
    p {
        padding-left: 0.5rem;
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
                <SectionSubHeader>The things I love to learn about and work on everyday.</SectionSubHeader>
                <SkillsUl>
                    {
                        skills.map(({ skillName }) => {
                            return (
                              <SkillsLi key={skillName}>
                                <BsCode />
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
