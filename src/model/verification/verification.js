// This Module will be used for storing verification codes information for all db entities

// Importing 3rd Party Modules
import mongoose from "mongoose";
const { Schema } = mongoose;
const { Types } = Schema;
const { ObjectId } = Types;

// Verification Collection Schema
const verification = new Schema({
  user : {
    type : ObjectId ,
    ref : "UserWebPortal" ,
    required : true
  } ,
  verificationCode : [
    {
      type : Number ,
      min : 1000 ,
      max : 9999
    }
  ]
});

// Creating Verification Model
const Verification = mongoose.model("Verification" , verification);

// Exporting Verification Model
export { Verification };