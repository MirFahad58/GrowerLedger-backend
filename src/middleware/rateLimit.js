// This Module is responsible for limiting API rate hit

// Importing 3rd Party Module
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs : 15 * 60 * 1000 , // 15 minutes
  max : 200 // limit each IP to 200 requests per windowMs
});

// Exporting API Limit
export { limiter };