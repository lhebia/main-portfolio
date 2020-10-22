import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import Layout from '../components/Layout';
import { PageSection } from '../styles/globalStyles';
import Head from '../components/Head';

const NotFound = () => {
    return (
      <Layout headerPosition="fixed" colorA="#000000" colorB="#000000">
        <Head title="Not Found" />
        <PageSection
          css={css`
            text-align: center;
            min-height: 80vh;
            h1,
            p {
              line-height: 3rem;
            }
          `}
        >
          <h1>Page Not Found</h1>
          <p>
            <Link to="/">Head home</Link>
          </p>
        </PageSection>
      </Layout>
    )
}

export default NotFound;