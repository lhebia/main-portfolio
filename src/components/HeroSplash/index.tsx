import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { SplashSection, SplashTitle, SplashSubTitle, Wrapper } from '../../styles/globalStyles';
import lightskyblue from '../../assets/lightskyblue.jpg';
import bloghandsmallA from '../../assets/bloghandsmallA.jpg';
import './styles.scss';

interface HeroSplashProps {
	background: string,
}

const HeroSplash: React.FC<HeroSplashProps> = ({ background }) => {
	
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					headTitle
					headSubTitle
				}
			}
		}
	`)

	const { headTitle, headSubTitle } = data.site.siteMetadata;

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
					<SplashTitle>{ headTitle }</SplashTitle>
					<SplashSubTitle>{ headSubTitle }</SplashSubTitle>
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
