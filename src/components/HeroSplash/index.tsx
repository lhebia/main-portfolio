import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { SplashSection, SplashTitle, SplashSubTitle, Wrapper } from '../../styles/globalStyles';
import lightskyblue from '../../assets/lightskyblue.jpg';
import bloghandsmallA from '../../assets/bloghandsmallA.jpg';

import './styles.scss';

interface HeroSplashProps {
	pageType: string,
}

const HeroSplash: React.FC<HeroSplashProps> = ({ pageType }) => {

	const [background, setBackground] = useState('');

	useEffect(() => {
			if (pageType === 'blog') {
					setBackground(bloghandsmallA);
			} else {
					setBackground(lightskyblue);
			}
	},[pageType])
	
	const data = useStaticQuery(graphql`
		query {
				site {
						siteMetadata {
								headTitle
						}
				}
		}
	`)

	return (
		<div className="hero--splash">
			<SplashSection css={css`
				background-image: url(${background});        
			`}>
				<Wrapper
					css={css`
						display: flex;
						flex-direction: column;
					`}
				>
					<SplashTitle>{data.site.siteMetadata.headTitle}</SplashTitle>
					<SplashSubTitle>Front End Web Developer <span role="img" aria-label="Male Technologist">👨🏻‍💻</span></SplashSubTitle>
					<div
						className="button-container"
					>
						<button 
							onClick={() => scrollTo('#main')}
							className="button"
						>
							<p>Scroll</p>
						</button>
					</div>
				</Wrapper>
			</SplashSection>
		</div>
	)
}

export default HeroSplash;
