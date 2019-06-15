export default {
  app: {
    NAME: "Odont"
  },
  config: {
    API_URL: "https://odont-api.herokuapp.com/api/rest/"
  },
  screenRoutes: {
    HOME_SCREEN: "Home",
    PROFILE_SCREEN: "Profile",
    CONSULTATION: "Consultation"
  },
  stacks: {
    HOME: "Home",
    LOGIN: "Login"
  },
  api: {
    LOGIN: "auth/login",
    CONSULTATION: "consultation-markeds/pacients/:id"
  },
  storageItems: {
    TOKEN: "@odont/storage/token"
  }
};
