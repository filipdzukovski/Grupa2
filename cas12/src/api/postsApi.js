import { api } from "./../config/properties";

export const getPosts = (token) => {
  const header = {
    Accept: "application/json,*/*",
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  return fetch(`${api.localRoute}/posts`, { method: "GET", headers: header })
    .then((res) => res.json())
    .then((json) => Promise.resolve(json))
    .catch((err) => Promise.reject(err));
};
