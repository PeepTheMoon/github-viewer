export const getUserRepos = username => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then((repos) => {
      return repos.map(repo => {
        return repo.name;
      });
    });
};
