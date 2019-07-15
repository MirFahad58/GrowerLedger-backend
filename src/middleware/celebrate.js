// This Module is responsible for using celebrate error middleware for throwing errors to client
// Importing 3rd Party Module
import { errors } from "celebrate";

// Errors Middleware
const celebrate = errors();

// Exporting Error Middleware
export { celebrate };