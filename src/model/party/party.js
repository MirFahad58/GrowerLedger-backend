// This Module will be used for storing parties  information

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

// party Collection Schema
const Party = new Schema({
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
  accountLedgerParty:[{type:ObjectId,ref:"accountLedgerParty"}],
  deletedOrders : [{ type : ObjectId , ref : "Order" }] ,
  tokens : [{ type : String }] ,
});


// Creating party Model
const party = mongoose.model("party" , Party);

// Exporting party Model
export { party };