// This module is responsible for db connection with respect to transmission control protocol

// Importing 3rd Party Modules
import mongoose from "mongoose";
import Agenda from "agenda";
import redis from "async-redis";

// Agenda For Cron Jobs
let agenda;

// Redis Client
let client;

// MongoDB Connection
if (process.env.NODE_ENV === "development") {
  if (process.env.DB_ENV === "local") 
    mongoose.connect(
      process.env.DB_LOCAL ,
      {
        useCreateIndex : true ,
        useNewUrlParser : true
      } ,
      err => {
        if (err) console.log(err);
        else {
          console.log("Database is connected");
          agenda = new Agenda({ db : { address : process.env.DB_LOCAL } });
          // client = redis.createClient(
          //   process.env.REDIS_PORT_DEV ,
          //   process.env.REDIS_HOST_DEV
          // );
          // client.on("error" , function(err) {
          //   console.log("Error " + err);
          // });
        }
      }
    );
   else if (process.env.DB_ENV === "dev") 
    mongoose.connect(
      process.env.DB_DEV ,
      {
        useCreateIndex : true ,
        useNewUrlParser : true
      } ,
      err => {
        if (err) console.log(err);
        else {
          console.log("Database is connected");
          agenda = new Agenda({ db : { address : process.env.DB_DEV } });
          client = redis.createClient(
            process.env.REDIS_PORT_DEV ,
            process.env.REDIS_HOST_DEV
          );
          client.on("error" , function(err) {
            console.log("Error " + err);
          });
        }
      }
    );
  
} else 
  mongoose.connect(
    process.env.DB_PROD ,
    {
      useCreateIndex : true ,
      useNewUrlParser : true
    } ,
    err => {
      if (err) console.log(err);
      else {
        console.log("Database is connected");
        agenda = new Agenda({ db : { address : process.env.DB_PROD } });
        client = redis.createClient(
          process.env.REDIS_PORT_PROD ,
          process.env.REDIS_HOST_PROD
        );
        client.on("error" , function(err) {
          console.log("Error " + err);
        });
      }
    }
  );


// Exporting Mongodb Connection
export { mongoose , agenda };