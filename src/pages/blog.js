import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Layout from '../components/Layout';
import { Wrapper, PageSection, SectionHeader } from '../styles/globalStyles';
import Head from '../components/Head';
import HeroSplash from '../components/HeroSplash';

const BlogUl = styled.ul`
    text-align: center;
    p {
        padding: 0.3rem 0;
    }
`;

const BlogLi = styled.li`
    padding: 1rem;
`;

const BlogTitle = styled.p`
    display: inline;
    font-size: 1.5rem;
    line-height: 1.8rem;
    font-weight: bold;
`;

const TitleDate = styled.p`
    font-size: 0.8rem;
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
                      text-align: center;
                      margin-bottom: 4rem;
                    `}>A few stories, mostly about web development, parenting and sometimes burgers <span role="img" aria-label="Burger">🍔</span>.</p>
                    <BlogUl>
                        {
                            posts.map(post => {
                                return (
                                  <BlogLi>
                                    <Link
                                      to={`/blog/${post.node.slug}`}
                                      key={post.node.slug}
                                    >
                                      <BlogTitle>{post.node.title}</BlogTitle>
                                    </Link>
                                    <TitleDate>
                                      {post.node.publishedDate}
                                    </TitleDate>
                                    <p>{post.node.description}</p>
                                  </BlogLi>
                                )
                            })
                        }
                    </BlogUl>
                </PageSection>
            </Wrapper>
        </Layout>
    )
}

export default Blog;