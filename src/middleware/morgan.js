// This Module is responsible for seeing http logs in console

// Importing 3rd Party Module
import morgan from "morgan";

// This Variable will store logs
let log;

// Morgan Middleware
if (process.env.NODE_ENV === "production") log = morgan("combined");
else log = morgan("dev");

// Exporting Middleware
export { log };