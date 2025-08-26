export const fetchUser = (username: string) => {
  return fetch(`https://api.github.com/users/${username}`).then((res) => {
    if (!res.ok) {
      throw new Error(`Failed to fetch user: ${res.status} ${res.statusText}`);
    }
    return res.json();
  });
};

export const fetchRepo = (username: string) => {
  return fetch(
    `https://api.github.com/users/${username}/repos?sort=created&per_page=5`
  ).then((res) => {
    if (!res.ok) {
      throw new Error(`Failed to fetch user: ${res.status} ${res.statusText}`);
    }
    return res.json();
  });
};
