// This Module will be used for storing user (Shipper , Transporter and Guest) information

// Importing 3rd Party Modules
import mongoose from "mongoose";
const { Schema } = mongoose;
const { Types } = Schema;
const { ObjectId } = Types;

// Importing User Defined Modules
import { encrypt } from "../../config/secret/bcrypt";
import {
  ACCOUNT_STATUS ,
  ACCOUNT_TYPE ,
  TWO_WAY_AUTHENTICATION
} from "../../config/constants";
import validate from "../../validation/model/validation";

// User Collection Schema
const userWebPortal = new Schema({
  metaData : {
    totalAddedPosts : { type : Number , default : 0 } ,
    totalConnections : { type : Number , default : 0 } ,
    totalFollowers : { type : Number , default : 0 } ,
    totalFollowing : { type : Number , default : 0 }
  } ,
  name : {
    type : String ,
    lowercase : true ,
    required : true
  } ,
  dateOfBirth : { type : Date , required : true },
  gender : { type : String , required : true },
  email : { type : String , unique : true , lowercase : true , required : true } ,
  password : { type : String , required : true , validate : validate.isPassword() } ,
  phoneNumber : {
    type : String ,
    unique : true ,
    lowercase : true ,
    required : true ,
    validate : validate.isPhoneNumber()
  } ,
  address : {
    street : { type : String } ,
    city : { type : String } ,
    country : { type : String } ,
  } ,
  profilePic : { type : String , validate : validate.isURL() } ,
  phoneVerificationStatus : {
    type : String ,
    required : true ,
    enum : ACCOUNT_STATUS
  } ,
  accountStatus : { type : String , required : true , enum : ACCOUNT_STATUS } ,
  twoWayAuthentication : { type : Boolean , enum : TWO_WAY_AUTHENTICATION } ,
  accountCreatedDate : { type : Date , required : true } ,
  type : { type : String , enum : ACCOUNT_TYPE } ,
  skills : [{ type : ObjectId , ref : "User" }] ,
  followers : [{ type : ObjectId , ref : "User" }] ,
  following : [{ type : ObjectId , ref : "User" }] ,
  posts : [{ type : ObjectId , ref : "Posts" }] ,
  deletedPosts : [{ type : ObjectId , ref : "Posts" }] ,
  deletedFollowers : [{ type : ObjectId , ref : "User" }] ,
  deletedFollowing : [{ type : ObjectId , ref : "User" }] ,
  tokens : [{ type : String }] ,
  followerRequest : [{ type : ObjectId , ref : "User" }]
});

// Encrypt Password before saving data to model
userWebPortal.pre("save" , async function() {
  const user = this;
  user.password = await encrypt(user.password);
});

// Creating User Web Portal Model
const UserWebPortal = mongoose.model("UserWebPortal" , userWebPortal);

// Exporting User Web Portal Model
export { UserWebPortal };