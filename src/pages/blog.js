import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from '@emotion/styled';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { Wrapper, PageSection, SectionHeader } from '../styles/globalStyles';

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
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: bold;
`;

const Blog = () => {

    const data = useStaticQuery(graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              slug
              publishedDate(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    `)

    const posts = data.allContentfulBlogPost.edges;

    return (
        <Layout>
            <Hero />
            <Wrapper>
                <PageSection>
                    <SectionHeader>Blog</SectionHeader>
                    <BlogUl>
                        {
                            posts.map(post => {
                                return (
                                    <Link to="#">
                                        <BlogLi key={post.node.slug}>
                                            <BlogTitle>{post.node.title}</BlogTitle>
                                            <p>{post.node.publishedDate}</p>
                                        </BlogLi>
                                    </Link>
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