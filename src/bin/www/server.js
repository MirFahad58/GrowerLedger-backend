// This Module is the main server module which serve our app on port

// Importing 3rd Party Modules
import { app } from "../../app";
import https from "https";
import http from "http";
import fs from "fs";

if (process.env.NODE_ENV === "production")
  if (process.env.PROTOCOL === "http") {
    // If Protocol is http
    // http server listen on port
    http.createServer(app).listen(process.env.PORT);
  } else {
    // These files are private certificate files
    const privateKey = fs.readFileSync(
      __dirname + "/https/keyFile.key" ,
      "utf-8"
    );
    const certificate = fs.readFileSync(
      __dirname + "/https/certificate.crt" ,
      "utf-8"
    );
    const credentials = { key : privateKey , cert : certificate };
    // https server running on this port
    https.createServer(credentials , app).listen(process.env.PORT);
  }
// http server listen on port
else http.createServer(app).listen(process.env.PORT);