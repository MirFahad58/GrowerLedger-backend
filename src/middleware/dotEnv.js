// This module is responsible for adding env variable from .env file

// Importing 3rd Party Module
import dotEnv from "dotenv";

// Dot Env will get all variable's from .env file
dotEnv.config();

// Export Dot Env Module
export { dotEnv };