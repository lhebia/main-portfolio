import React from 'react';
import { Link } from 'gatsby';

import "./styles.scss";

import Head from '../../components/Head';

const NotFound = () => {
    return (
      <>
        <Head title="Not Found" />
        <div className="flex flex-align-center not-found-element">
          <p className="extra-large-number tech-stack-font">404</p>
          <h1>Page Not Found | <Link to="/">Home</Link></h1>
        </div>
      </>
    )
}

export default NotFound;