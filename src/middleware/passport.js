// This Module is responsible for checking jwt passport authentication token middleware

// Importing 3rd Party Modules
import passport from "passport";

// This function will check authentication middleware of passport js jwt
const checkAuth = access => passport.authenticate(access , { session : false });
const initialize = passport.initialize();

// Exporting check authentication function
export { checkAuth , initialize };