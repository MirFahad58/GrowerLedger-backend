// This Module is responsible for using body parser for recieving data in application/json

// Importing 3rd Party Module
import bodyParser from "body-parser";

// Body-Parser Middleware
const encoded = bodyParser.urlencoded({ extended : true });
const json = bodyParser.json();

// Exporting Body-Parser Middleware
export { encoded , json };