// This Module Contain all api's

// Importing 3rd Party Modules
import express from "express";

// Importing User Defined Modules
import { PASSPORT_STRATEGY } from "../config/constants";
import { checkAuth } from "../config/secret/passport";
// API Container
const api = express();

// Using API inside app container


// Portal API
api.use("/portal",
require("../components/portal/unAuth"));

// General API's
// api.use("/general" , require("../components/general/general"));

// // External Services API's
// api.use(
//   "/external" ,
//   require("../components/externalServices/remoteDriver/driver.router")
// );

// // User Portal API
// api.use("/portal" , require("../components/portal/unAuth"));
// api.use(
//   "/portal" ,
//   checkAuth(PASSPORT_STRATEGY[1]) ,
//   require("../components/portal/get")
// );
// api.use(
//   "/portal" ,
//   checkAuth(PASSPORT_STRATEGY[1]) ,
//   require("../components/portal/post")
// );
// api.use(
//   "/portal" ,
//   checkAuth(PASSPORT_STRATEGY[1]) ,
//   require("../components/portal/put")
// );
// api.use(
//   "/portal" ,
//   checkAuth(PASSPORT_STRATEGY[1]) ,
//   require("../components/portal/delete")
// );

// // Global API
// api.use(
//   "/" ,
//   checkAuth(PASSPORT_STRATEGY.slice(1)) ,
//   require("../components/global/global")
// );

// Exporting API for app
export { api };