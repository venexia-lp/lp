import React from 'react';

import Layout from '../components/Layout';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1">Page not found</h1>
        <h3 className="mb-5">
          <em>Not a valid URL</em>
        </h3>

        <Link className="btn btn-dark btn-xl" to="/">
          Go to Homepage
        </Link>
      </div>
      <div className="overlay"></div>
    </header>
  </Layout>
);

export default IndexPage;
