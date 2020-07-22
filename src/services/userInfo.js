export const getUserInfo = username => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(({ name, login, followers, following, url }) => ({ name, login, followers, following, url }));
};
