import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Wrapper, PageSection, SectionHeader, SectionSubHeader, TechStack } from '../../styles/globalStyles';
import { BsCode } from 'react-icons/bs';

import { SkillsUl, SkillsLi } from './styles';

interface Skills {
	skillName: string,
}

const Skills: React.FC<any> = () => {

	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					skillsSection {
						title
						subTitle
						skills {
							icon
							skillName
						}
					}
				}
			}
		}
	`);

	const { title, subTitle, skills } = data.site.siteMetadata.skillsSection;

	return (
		<Wrapper>
			<PageSection>
				<SectionHeader>{ title }</SectionHeader>
				<SectionSubHeader>{ subTitle }</SectionSubHeader>
				<SkillsUl>
					{
						skills.map(({ skillName }: Skills) => {
							return (
								<SkillsLi key={"skl-" + skillName}>
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

export default Skills;
