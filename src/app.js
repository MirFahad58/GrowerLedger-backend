// Importing Top-Level Configuration Modules
import "./middleware/dotEnv";
import "./config/secret/database";

// Importing 3rd Party Modules
import express from "express";

// Importing Middlewares
import { setCORS } from "./middleware/cors";
import { initialize } from "./middleware/passport";
import { encoded , json } from "./middleware/bodyParser";
import { log } from "./middleware/morgan";
import { celebrate } from "./middleware/celebrate";
import { error } from "./middleware/error";
import { limiter } from "./middleware/rateLimit";
import { api } from "./config/api";

// Express App Container
const app = express();

// Using Middleware
app.use(encoded);
app.use(json);
app.use(initialize);
app.use(log);
app.use(setCORS);
if (process.env.NODE_ENV === "production") app.use(limiter);

// Main Endpoint will used by load balancer to check if server is running
app.get("/" , (req , res) => {
  return res.status(200).send("Success");
});

// Using all API
app.use(api);

// Error Handling Middleware For Joi Celebrate
app.use(celebrate);

// Error Handling Middleware For all API's
app.use(error);
5
// Exporting App
export { app };