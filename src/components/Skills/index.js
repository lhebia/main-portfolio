import React from 'react';

import { Wrapper, PageSection, SectionHeader, SectionSubHeader, TechStack } from '../../styles/globalStyles';
import { data } from './query';
import { BsCode } from 'react-icons/bs';

import { SkillsUl, SkillsLi } from './styles';

export default function Skills() {

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
