export default {
    app: {
        NAME: 'Odont'
    },
    config: {
        API_URL: 'https://odont-api.herokuapp.com/api/rest/'
    },
    screenRoutes: {
        HOME_SCREEN: 'Home',
        PROFILE_SCREEN: 'Profile'
    },
    stacks: {
        HOME: 'Home',
        LOGIN: 'Login'
    },
    api: {
        LOGIN: 'auth/login'
    },
    storageItems: {
        TOKEN: "@odont/storage/token"
    }
}