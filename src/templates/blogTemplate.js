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
    <Layout>
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
          <Link
            css={css`
              padding: 0.5rem 0.7rem;
              margin-top: 1rem;
              border-radius: 5px;
              background-color: ${siteVars.mainHighlight};
              color: ${siteVars.offWhite};
              border: 1px solid ${siteVars.mainHighlight};
              opacity: 0.86;
              transition: all 0.2s;
              &:hover,
              &:focus {
                background-color: ${siteVars.offWhite};
                border: 1px solid ${siteVars.mainHighlight};
                color: ${siteVars.mainHighlight};
              }
            `}
            to="/blog"
          >
            Back
          </Link>
        </BlogPageSection>
      </Wrapper>
    </Layout>
  )
}