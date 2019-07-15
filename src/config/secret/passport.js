// This Module is responsible for checking jwt passport authentication token middleware

// Importing 3rd Party Modules
import passport from "passport";

// Importing all passport strategies
require("../passport/portal");
require("../passport/verification");

// This function will check authentication middleware of passport js jwt
const checkAuth = access => {
  return passport.authenticate(access , { session : false });
};

// Exporting check authentication function
export { checkAuth };