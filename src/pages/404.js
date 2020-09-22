import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import Layout from '../components/Layout';
import { PageSection } from '../styles/globalStyles';

const NotFound = () => {
    return (
      <Layout>
        <PageSection css={css`
            text-align: center;
            min-height: 80vh;
            h1, p {
                line-height: 3rem;
            }
        `}>
          <h1>Page Not Found</h1>
          <p>
            <Link to="/">Head home</Link>
          </p>
        </PageSection>
      </Layout>
    )
}

export default NotFound;