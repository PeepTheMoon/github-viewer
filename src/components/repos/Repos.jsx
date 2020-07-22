import React from 'react';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => {
  const repoList = repos.map(repo => (
    <li key={repo}>{repo}</li>
  ));

  return (
    <ul>
      User Repos:
      {repoList}
    </ul>
  );
};

Repos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Repos;
