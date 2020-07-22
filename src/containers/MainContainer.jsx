import React, { Component } from 'react';
import Display from '../components/display/Display';
import InputForm from '../components/input-form/InputForm';
import Repos from '../components/repos/Repos';

import { getUserInfo } from '../services/userInfo';
import { getUserRepos } from '../services/getUserRepos';

export default class MainContainer extends Component {
  state = {
    name: '',
    username: '',
    followerCount: 0,
    followingCount: 0,
    profileLink: '',
    repos: []
  }

  handleChange = ({ target }) => {
    this.setState({ username: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const { username } = this.state;
    Promise.all([
      getUserInfo(username),
      getUserRepos(username)
    ])
      .then(([{ name, followers, following, url }, repos]) => this.setState({ name, followerCount: followers, followingCount: following, profileLink: url, repos }));
  }

  render() {
    const { name, username, followerCount, followingCount, profileLink, repos } = this.state;
    return (
      <>
        <InputForm username={username} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Display name={name} username={username} followerCount={followerCount} followingCount={followingCount} profileLink={profileLink} />
        <Repos repos={repos} />
      </>
    );
  }
}
