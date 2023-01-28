// #website-www
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

// #website-backend
// cloudflareCache.js
const MAX_CACHE_PURGE_COUNT = 3;
const CLOUDFLARE_ZONE_ID = config.get("cloudflare.CLOUDFLARE_ZONE_ID");
const CLOUDFLARE_PURGE_CACHE_API = `https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/purge_cache`;

// extensionRequests.js
const EXTENSION_REQUEST_STATUS = {
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  DENIED: "DENIED",
};

// profileDiff.js
const profileDiffStatus = {
  APPROVED: "APPROVED",
  REJECTED: "NOT APPROVED",
  PENDING: "PENDING",
};

// roles.js
const ROLES = {
  SUPERUSER: "super_user",
  APPOWNER: "app_owner",
  MEMBER: "member",
  ARCHIVED: "archived",
};

// userStatus.js
const userState = {
  ACTIVE: "ACTIVE",
  IDLE: "IDLE",
  OOO: "OOO",
};

// user.js
const profileStatus = {
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  NOT_APPROVED: "NOT APPROVED",
};
const USER_STATUS = {
  OOO: "ooo",
  IDLE: "idle",
  ACTIVE: "active",
};

// #website-members
// App-constants.js
const BASE_IMAGE_URL =
  "https://raw.githubusercontent.com/Real-Dev-Squad/website-static/main/members";
const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const USER_DATA_URL = `${BASE_API_URL}/users/self`;
const PATHS = {
  HOME: "https://www.realdevsquad.com",
  WELCOME: "https://welcome.realdevsquad.com/",
  EVENTS: "https://www.realdevsquad.com/events.html",
  MEMBERS: "https://members.realdevsquad.com/",
  CRYPTO: "https://crypto.realdevsquad.com/",
  STATUS: "https://status.realdevsquad.com/",
};
const LOGIN_URL =
  "https://github.com/login/oauth/authorize?client_id=23c78f66ab7964e5ef97";
const USER_PROFILE_URL = "https://my.realdevsquad.com/profile";
const SEARCHBOX_PLACEHOLDER = "search members here";
const NAVMENU = [
  {
    id: "1",
    name: "Home",
    path: "https://www.realdevsquad.com",
  },
  {
    id: "2",
    name: "Welcome",
    path: "https://welcome.realdevsquad.com/",
  },
  {
    id: "3",
    name: "Events",
    path: "https://www.realdevsquad.com/events.html",
  },
  {
    id: "4",
    name: "Members",
    path: "https://members.realdevsquad.com/",
  },
  {
    id: "5",
    name: "Crypto",
    path: "https://crypto.realdevsquad.com/",
  },
  {
    id: "6",
    name: "Status",
    path: "https://status.realdevsquad.com/",
  },
];

// #website-my
// navbar.js
const LOGOUT_URL = "https://api.realdevsquad.com/auth/signout";
const MAIN_SITE_URL = "https://realdevsquad.com/";

// signup.js
const GOTO_URL = "https://realdevsquad.com/goto";
const AUTH_URL =
  "https://github.com/login/oauth/authorize?client_id=23c78f66ab7964e5ef97";

// #website-dashboard - link: https://github.com/Real-Dev-Squad/website-dashboard/blob/develop/online-members/constants.js
// constants.js -> RDS Api Constants
const RDS_API_MEMBERS = "https://api.realdevsquad.com/members";
const RDS_API_TASKS_USERS = "https://api.realdevsquad.com/tasks";
const RDS_CLOUDINARY_CLOUD_URL = `https://res.cloudinary.com/realdevsquad/image/upload`;

const RDS_SSE_ONLINE_URL = "https://online.realdevsquad.com/online-members";

module.exports = {
  //website-www
  MAP_CONTAINER_ID: MAP_CONTAINER_ID,
  MAP_STYLE: MAP_STYLE,
  MAP_ZOOM: MAP_ZOOM,
  MAP_COORDINATES: MAP_COORDINATES,
  BASE_URL: BASE_URL,
  JOIN_POST_URL: JOIN_POST_URL,
  SELF_URL: SELF_URL,
  GITHUB_OAUTH: GITHUB_OAUTH,

  //website-backend
  // cloudflareCache.js
  MAX_CACHE_PURGE_COUNT: MAX_CACHE_PURGE_COUNT,
  CLOUDFLARE_ZONE_ID: CLOUDFLARE_ZONE_ID,
  CLOUDFLARE_PURGE_CACHE_API: CLOUDFLARE_PURGE_CACHE_API,

  // extensionRequests.js
  EXTENSION_REQUEST_STATUS: EXTENSION_REQUEST_STATUS,

  // multer.js
  FILE_SIZE_1MB: 1_000_000, // in bytes, 1000000 bytes = 1MB
  PROFILE_FILE_SIZE: 2_000_000, // Limiting profile upload size to 2MB

  // profileDiff.js
  profileDiffStatus: profileDiffStatus,

  // roles.js
  ROLES: ROLES,

  // userStatus.js
  userState: userState,

  // users.js
  profileStatus: profileStatus,
  USER_STATUS: USER_STATUS,

  // website-members
  // App-constants.js
  BASE_IMAGE_URL: BASE_IMAGE_URL,
  BASE_API_URL: BASE_API_URL,
  USER_DATA_URL: USER_DATA_URL,
  LOGIN_URL: LOGIN_URL,
  PATHS: PATHS,
  USER_PROFILE_URL: USER_PROFILE_URL,
  NAVMENU: NAVMENU,
  SEARCHBOX_PLACEHOLDER: SEARCHBOX_PLACEHOLDER,

  // #website-my
  // navbar.js
  LOGOUT_URL: LOGOUT_URL,
  MAIN_SITE_URL: MAIN_SITE_URL,

  // signup.js
  GOTO_URL: GOTO_URL,
  AUTH_URL: AUTH_URL,

  // #website-dashboard - link: https://github.com/Real-Dev-Squad/website-dashboard/blob/develop/online-members/constants.js
  // constants.js -> RDS Api Constants
  RDS_API_MEMBERS: RDS_API_MEMBERS,
  RDS_API_TASKS_USERS: RDS_API_TASKS_USERS,
  RDS_CLOUDINARY_CLOUD_URL: RDS_CLOUDINARY_CLOUD_URL,
  RDS_SSE_ONLINE_URL: RDS_SSE_ONLINE_URL,
};
