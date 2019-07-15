// This module is responsible for using Cross Origin Resource Sharing

// Importing 3rd Party Module
import cors from "cors";

// Cross Origin Resource Sharing Middleware
const originArray = process.env.CORS_ORGIN.split(",");
const allowedHeadersArray = process.env.CORS_HEADER.split(",");
const setCORS = cors({
  origin : originArray ,
  optionsSuccessStatus : 200 ,
  methods : process.env.CORS_METHOD ,
  credentials : true ,
  allowedHeaders : allowedHeadersArray
});

// Exporting CORS
export { setCORS };