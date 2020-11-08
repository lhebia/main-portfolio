import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/Layout';
import { siteVars, BlogPageSection, Wrapper } from '../styles/globalStyles';
import Head from '../components/Head';

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      description
      publishedDate (formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`;

export default function blogTemplate(props) {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title["en-US"];
        const url = node.data.target.fields.file["en-US"].url;
        return <img alt={alt} src={url}/>;
      }
    }
  }

  return (
    <Layout headerPosition="sticky" colorA="#000000" colorB="#000000">
      <Head title={props.data.contentfulBlogPost.title} />
      <Wrapper>
        <BlogPageSection>
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.publishedDate}</p>
          {documentToReactComponents(
            props.data.contentfulBlogPost.body.json,
            options
          )}
          <hr css={css`margin: 2rem 0;`}class="solid"></hr>
          <p>Written by Lawrence Hebia, a web developer from Toronto, Canada. <span role="img" aria-label="Peace symbol">✌🏼</span></p>
          <Link
            css={css`
              display: block;
              padding: 0.5rem 0rem;
              width: 6rem;
              height: 2rem;
              text-align: center;
              margin-top: 1rem;
              border-radius: 5px;
              background-color: ${siteVars.mainHighlight};
              color: ${siteVars.offWhite};
              border: 1px solid ${siteVars.mainHighlight};
              opacity: 0.86;
              transition: all 0.2s;
              span {
                display: none;
                width: 1rem;
              }
              &:hover,
              &:focus {
                background-color: ${siteVars.offWhite};
                border: 1px solid ${siteVars.mainHighlight};
                color: ${siteVars.mainHighlight};
                span {
                  display: inline;
                }
              }
            `}
            to="/blog"
          >
            <span role="img" aria-label="arrow back">←</span>Back
          </Link>
        </BlogPageSection>
      </Wrapper>
    </Layout>
  )
}