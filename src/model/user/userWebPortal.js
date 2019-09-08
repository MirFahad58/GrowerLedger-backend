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
    totalAddedOrders : { type : Number , default : 0 } ,
    totalGrowers : { type : Number , default : 0 } ,
    totalParties : { type : Number , default : 0 } ,
  } ,
  name : {
    type : String ,
    lowercase : true ,
    required : true
  } ,
  password : { type : String , required : true , validate : validate.isPassword() } ,
  account:{
    type : Number ,
    default:0,
  } ,
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
  growers : [{ type : ObjectId , ref : "Grower" }] ,
  parties : [{ type : ObjectId , ref : "Party" }] ,
  orders : [{ type : ObjectId , ref : "Order" }] ,
  accountLedger:[{type:ObjectId,ref:"accountLedger"}],
  deletedGrowers : [{ type : ObjectId , ref : "Grower" }] ,
  deletedParties : [{ type : ObjectId , ref : "Party" }] ,
  deletedOrders : [{ type : ObjectId , ref : "Order" }] ,
  jwtToken : { type : String } ,
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