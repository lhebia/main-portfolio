import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';

import "./styles.scss";

const Projects: React.FC<any> = () => {

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
		<div className="wrapper">
			<section className="page-section">
				<h4 className="section-header">Projects</h4>
				<p className="section-sub-header">A few of the things I've been working on.</p>
				<ul className="project-ul">
					{
						projectList.map(( project: any ) => {
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
										<div className="text-card">
											<p className="project-title">
												<a className="project-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
												{project.title}
												</a>
											</p>
											<p className="tech-stack">{ stack }</p>
											<p>{project.desc}</p>
											<p>
												<a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
													Live
												</a> | 
												<a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
													{' '}Github
												</a>
											</p>
										</div>
									</article>
								</li>
							)
						})
					}
					</ul>
			</section>
		</div>
	)
}

export default Projects;
