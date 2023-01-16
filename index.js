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

// website-members
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
const BRAND_NAME = "Real Dev Squad";
const MEMBERS_TITLE = "Members";
const NEW_MEMBERS_TITLE = "New Users";
const SET_ERRORS = "SET_ERRORS";
const SET_MEMBERS = "SET_MEMBERS";
const HOST_NAME = "members.realdevsquad.com";
const TIMEOUT = 1000;
const KEY_TAB = 9;
const KEY_ESC = 27;
const TASK_TYPE = {
  NOTEWORTHY: "Noteworthy",
  OTHER: "Other Contribution",
};
const ALT_KEY = "Alt";

// cache-max-age.js
const CACHE_MAX_AGE = 604800;

// error-messages.js
const unAuthorizedPageViewError = "Unauthorized to view this page.";

// profile-image.js
const WIDTH_200PX = "w_200";
const WIDTH_40PX = "w_40";
const HEIGHT_200PX = "h_200";
const HEIGHT_40PX = "h_40";

// website-my
// analytics.js
const NEW_SIGNUP_FLOW = {
  USER_GETTING_STARTED: "User Getting-Started - New SignUp Flow",
  USER_FIRST_NAME: "User entered First Name - New SignUp Flow",
  USER_LAST_NAME: "User entered Last Name - New SignUp Flow",
  USER_USERNAME: "User entered Username - New SignUp Flow",
  SOMETHING_WENT_WRONG: "Something went wrong - New SignUp Flow",
  USERNAME_NOT_AVAILABLE:
    "User entered a username which was already taken - New SignUp Flow",
  USER_REGISTERED: "User Registered - New SignUp Flow",
  NEW_SIGNUP_FLOW_DONE: "User completed all the steps - New SignUp Flow",
  UNABLE_TO_SIGNUP: "Unable to Sign Up - New SignUp Flow Breaks",
  UNABLE_TO_REGISTER: "Unable to Register - New SignUp Flow Breaks",
};
const OLD_SIGNUP_FLOW = {
  SUBMIT_CLICKED: "Submit Button Clicked - Old SignUp Flow",
  USER_REGISTERED: "User Registered - Old SignUp Flow",
  UNABLE_TO_SIGNUP: "Unable to Sign Up - Old SignUp Flow Breaks",
  UNABLE_TO_REGISTER: "User unable to register - Old SignUp Flow Breaks",
};
const SIGNUP = {
  PAGE_LOADED: "Signup Page Loaded Successfully",
  USER_ALREADY_REGISTERED: "User Already Registered",
};

// navbar.js
const LOGOUT_URL = "https://api.realdevsquad.com/auth/signout";
const MAIN_SITE_URL = "https://realdevsquad.com/";

// new-signup.js
const GET_STARTED = "get-started";
const FIRST_NAME = "firstName";
const LAST_NAME = "lastName";
const USERNAME = "username";
const THANK_YOU = "thank-you";
const LABEL_TEXT = {
  firstName: "What is your first name?",
  lastName: "And what is your last name?",
  username: "Now choose your awesome username!",
};
const ERROR_MESSAGES = {
  userName: "username already taken!",
  others: "something went wrong",
};
const GET_STARTED_MAIN_HEADING = "Thank you for connecting your GitHub!";
const GET_STARTED_SUB_HEADING = "Please complete the signup in order to:";
const THANK_YOU_MAIN_HEADING = "Congratulations!";
const THANK_YOU_SUB_HEADING = "Lets get you started on your journey";

// signup.js
export const GOTO_URL = "https://realdevsquad.com/goto";
export const AUTH_URL =
  "https://github.com/login/oauth/authorize?client_id=23c78f66ab7964e5ef97";

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
  BRAND_NAME: BRAND_NAME,
  MEMBERS_TITLE: MEMBERS_TITLE,
  NEW_MEMBERS_TITLE: NEW_MEMBERS_TITLE,
  SET_ERRORS: SET_ERRORS,
  SET_MEMBERS: SET_MEMBERS,
  HOST_NAME: HOST_NAME,
  TIMEOUT: TIMEOUT,
  KEY_TAB: KEY_TAB,
  KEY_ESC: KEY_ESC,
  TASK_TYPE: TASK_TYPE,
  ALT_KEY: ALT_KEY,
  // cache-max-age.js
  CACHE_MAX_AGE: CACHE_MAX_AGE,
  // error-messages.js
  unAuthorizedPageViewError: unAuthorizedPageViewError,
  // profile-image.js
  WIDTH_200PX: WIDTH_200PX,
  WIDTH_40PX: WIDTH_40PX,
  HEIGHT_200PX: HEIGHT_200PX,
  HEIGHT_40PX: HEIGHT_40PX,

  //website-my
  // analytics.js
  NEW_SIGNUP_FLOW: NEW_SIGNUP_FLOW,
  OLD_SIGNUP_FLOW: OLD_SIGNUP_FLOW,
  SIGNUP: SIGNUP,

  // navbar.js
  LOGOUT_URL: LOGIN_URL,
  MAIN_SITE_URL: MAIN_SITE_URL,

  // new-signup.js
  GET_STARTED: GET_STARTED,
  FIRST_NAME: FIRST_NAME,
  LAST_NAME: LAST_NAME,
  USERNAME: USERNAME,
  THANK_YOU: THANK_YOU,
  LABEL_TEXT: LABEL_TEXT,
  ERROR_MESSAGES: ERROR_MESSAGES,
  GET_STARTED_MAIN_HEADING: GET_STARTED_MAIN_HEADING,
  GET_STARTED_SUB_HEADING: GET_STARTED_SUB_HEADING,
  THANK_YOU_MAIN_HEADING: THANK_YOU_MAIN_HEADING,
  THANK_YOU_SUB_HEADING: THANK_YOU_SUB_HEADING,

  // signup.js
  GOTO_URL: GOTO_URL,
  AUTH_URL: AUTH_URL,
};
