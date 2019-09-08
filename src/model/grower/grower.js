// This Module will be used for storing user (Shipper , Transporter and Guest) information

// Importing 3rd Party Modules
import mongoose from "mongoose";
const { Schema } = mongoose;
const { Types } = Schema;
const { ObjectId } = Types;

// Importing User Defined Modules
import {
  ACCOUNT_TYPE ,
} from "../../config/constants";
import validate from "../../validation/model/validation";

// grower Collection Schema
const Grower = new Schema({
  metaData : {
    totalOrders : { type : Number , default : 0 } 
  } ,
  userId:{type:ObjectId,required:true},
  name : {
    type : String ,
    lowercase : true ,
    required : true
  } ,
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
  accountCreatedDate : { type : Date , required : true } ,
  type : { type : String , enum : ACCOUNT_TYPE } ,
  orders : [{ type : ObjectId , ref : "Order" }] ,
  accountLedgerGrower:[{type:ObjectId,ref:"accountLedgerGrower"}],
  deletedOrders : [{ type : ObjectId , ref : "Order" }] ,
  tokens : [{ type : String }] ,
});


// Creating grower Model
const grower = mongoose.model("grower" , Grower);

// Exporting grower Model
export { grower };