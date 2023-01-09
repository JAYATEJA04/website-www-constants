const MAP_CONTAINER_ID = "map";
const MAP_STYLE = "mapbox://styles/mapbox/streets-v11";
const MAP_ZOOM = 2.5;
const MAP_COORDINATES = {
  LNG: 78.476681027237,
  LAT: 22.1991660760527,
};
const BASE_URL = "https://api.realdevsquad.com";
const JOIN_POST_URL = `${BASE_URL}/users/self/intro`;
const SELF_URL = `${BASE_URL}/users/self`;
const GITHUB_OAUTH =
  "https://github.com/login/oauth/authorize?client_id=23c78f66ab7964e5ef97";

module.exports = {
  MAP_CONTAINER_ID: MAP_CONTAINER_ID,
  MAP_STYLE: MAP_STYLE,
  MAP_ZOOM: MAP_ZOOM,
  MAP_COORDINATES: MAP_CONTAINER_ID,
  BASE_URL: BASE_URL,
  JOIN_POST_URL: JOIN_POST_URL,
  SELF_URL: SELF_URL,
  GITHUB_OAUTH: GITHUB_OAUTH,
};
