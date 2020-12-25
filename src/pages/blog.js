import React from 'react';
import { 
  useStaticQuery, 
  graphql, 
  Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Layout from '../components/Layout';
import { 
  siteVars, 
  Wrapper, 
  PageSection, 
  SectionHeader
} from '../styles/globalStyles';
import Head from '../components/Head';
import HeroSplash from '../components/HeroSplash';

const BlogUl = styled.ul`
  text-align: left;
`;

const BlogLi = styled.li`
    padding: 1rem;
    width: 60%;
    margin: 2rem auto;
    border-radius: ${siteVars.borderRadius};
    box-shadow: ${siteVars.boxShadow};
    @media (max-width: 850px) {
      width: 80%;
    }
    @media (max-width: 650px) {
      width: 100%;
    }
`;

const BlogTitle = styled.p`
    display: inline;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: bold;
    padding-bottom: 1rem;
`;

const BlogDescription = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 1rem 0 2rem;
`;

const TitleDate = styled.p`
    font-size: 0.8rem;
    padding: 0.5rem 0;
`;

const Blog = () => {

    const data = useStaticQuery(graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              description
              slug
              publishedDate(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    `)

    const posts = data.allContentfulBlogPost.edges;

    return (
        <Layout headerPosition="fixed" colorA="#ffffff" colorB="#000000">
            <Head title="Blog" />
            <HeroSplash pageType="blog" />
            <Wrapper>
                <PageSection>
                    <SectionHeader css={css`
                      font-size: 4rem;
                      line-height: 4.6rem;
                    `}>Blog</SectionHeader>
                    <p css={css`
                      font-size: 1.5rem;
                      line-height: 2.1rem;
                      text-align: center;
                      margin-bottom: 4rem;
                    `}>A handbook, written by me, about web development, parenting and <span role="img" aria-label="Burger">🍔</span>.</p>
                    <BlogUl>
                        {
                            posts.map(post => {
                                return (
                                  <BlogLi key={post.node.slug}>
                                    <Link
                                      to={`/blog/${post.node.slug}`}
                                      key={post.node.slug}
                                    >
                                      <BlogTitle>{post.node.title}</BlogTitle>
                                    </Link>
                                    <TitleDate>
                                      {post.node.publishedDate}
                                    </TitleDate>
                                    <BlogDescription>{post.node.description}</BlogDescription>
                                    <Link
                                      to={`/blog/${post.node.slug}`}
                                      key={post.node.slug}
                                    >
                                      <p>Read post</p>
                                    </Link>
                                  </BlogLi>
                                )
                            })
                        }
                    </BlogUl>
                    <a 
                      href='https://www.contentful.com/' 
                      rel="noreferrer"
                      target='_blank'
                    >
                      <img 
                        src='https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg' 
                        css={css`
                          width: 100px; 
                          margin: 0 auto; 
                          display: block;
                          padding-top: 2rem;
                        `} 
                        alt='Powered by Contentful' 
                      />
                    </a>
                </PageSection>
            </Wrapper>
        </Layout>
    )
}

export default Blog;