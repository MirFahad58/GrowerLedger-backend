// This Module will be used for storing parties/growers accountledger information

// Importing 3rd Party Modules
import mongoose from "mongoose";
const { Schema } = mongoose;
const { Types } = Schema;
const { ObjectId } = Types;

// Importing User Defined Modules
import {
  ACCOUNT_LEDGER_TYPE ,
} from "../../config/constants";
import validate from "../../validation/model/validation";

// accountledger Collection Schema
const AccountLedger = new Schema({
  userId:{type:ObjectId,required:true},
  PartyOrGrower:{type:ObjectId,required:true},
  purpose : {
    type : String ,
    lowercase : true ,
    required : true
  } ,
  givenAmount:{
    type : Number ,
    required : true
  },
  previewsAmount:{
    type : Number ,
    required : true
  },
  remainingAmount:{
    type : Number ,
    required : true
  },
  myAccount:{
    type : Number ,
    required : true
  },
  season:{
    type : Number ,
    required : true
  },
  date : { type : Date , required : true } ,
  type : { type : String , enum : ACCOUNT_LEDGER_TYPE } ,
});


// Creating accountledger Model
const accountledger = mongoose.model("accountledger" , AccountLedger);

// Exporting accountledger Model
export { accountledger };