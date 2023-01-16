// website-www
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

//website-backend
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

// logs.js
const logType = {
  PROFILE_DIFF_APPROVED: "PROFILE_DIFF_APPROVED",
  PROFILE_DIFF_REJECTED: "PROFILE_DIFF_REJECTED",
  CLOUDFLARE_CACHE_PURGED: "CLOUDFLARE_CACHE_PURGED",
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

module.exports = {
  //website-www
  MAP_CONTAINER_ID: MAP_CONTAINER_ID,
  MAP_STYLE: MAP_STYLE,
  MAP_ZOOM: MAP_ZOOM,
  MAP_COORDINATES: MAP_CONTAINER_ID,
  BASE_URL: BASE_URL,
  JOIN_POST_URL: JOIN_POST_URL,
  SELF_URL: SELF_URL,
  GITHUB_OAUTH: GITHUB_OAUTH,

  //website-backend
  // cloudflareCache.js
  MAX_CACHE_PURGE_COUNT: MAX_CACHE_PURGE_COUNT,
  CLOUDFLARE_PURGE_CACHE_API: CLOUDFLARE_PURGE_CACHE_API,

  // cloudinary.js
  PROFILE: {
    FOLDER: "/profile/",
    TAGS: ["profile", "user"],
    TRANSFORMATIONS: {
      transformation: [
        {
          quality: "auto",
          fetch_format: "auto",
        },
      ],
    },
  },

  // errorMessages.js
  INTERNAL_SERVER_ERROR: "An internal server error occurred",
  SOMETHING_WENT_WRONG:
    "Something went wrong. Please try again or contact admin",
  ONLY_IMAGE_SUPPORTED: "Only image/jpeg, image/png supported",
  ONLY_ONE_FILE_ALLOWED: "Only one file allowed",
  FILE_TOO_LARGE: (size) => `File too large, max accepted size is ${size} MB`,

  // extensionRequests.js
  EXTENSION_REQUEST_STATUS: EXTENSION_REQUEST_STATUS,

  // items.js
  TYPES: ["TASK", "USER"],

  // logs.js
  logType: logType,

  // multer.js
  FILE_SIZE_1MB: 1_000_000, // in bytes, 1000000 bytes = 1MB
  PROFILE_FILE_SIZE: 2_000_000, // Limiting profile upload size to 2MB

  // profileDiff.js
  profileDiffStatus: profileDiffStatus,

  // roles.js
  ROLES: ROLES,

  // tags.js
  TYPES: ["TASK", "USER", "SKILL"],

  // userStatus.js
  userState: userState,

  // users.js
  profileStatus: profileStatus,
  USER_STATUS: USER_STATUS,

  // wallets.js
  DINERO: "dinero",
  NEELAM: "neelam",
  INITIAL_WALLET: {
    dinero: 1000,
  },
};
