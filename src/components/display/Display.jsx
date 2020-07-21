import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ name, username, followerCount, followingCount, profileLink }) => (
  <div>
    <p>Name: {name}</p>
    <p>Username: {username}</p>
    <p>Follower Count: {followerCount}</p>
    <p>Following Count: {followingCount}</p>
    <p>Profile link: {profileLink}</p>
  </div>
);

Display.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  followerCount: PropTypes.number.isRequired,
  followingCount: PropTypes.number.isRequired,
  profileLink: PropTypes.string.isRequired
};

export default Display;
