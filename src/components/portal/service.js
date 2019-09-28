import { UserWebPortal } from "../../model/user/userWebPortal";
import { grower } from "../../model/grower/grower";
import { party } from "../../model/party/party";
import { accountledger } from "../../model/accountLedger/accountLedger";

import To from "await-to-js";
import {
  ACCOUNT_TYPE,
    ACCOUNT_STATUS ,
    TWO_WAY_AUTHENTICATION ,
  } from "../../config/constants";

exports.addUser = async fields => {
  fields.phoneVerificationStatus = ACCOUNT_STATUS[0];
  fields.accountStatus = ACCOUNT_STATUS[0];
  fields.twoWayAuthentication = TWO_WAY_AUTHENTICATION[1];
  let newUser = new UserWebPortal(fields);
  const [err, user] = await To(newUser.save());
  return { err, user };
};


exports.addGrower = async fields => {
  fields.type = ACCOUNT_TYPE[3];
  let newGrower = new grower(fields);
  const [err, addGrower] = await To(newGrower.save());
  return { err, addGrower };
};

exports.updateUser = async (query,fields) =>
{
  // {$addToSet:{growers:ObjectId}}
  const [err,user] = await To(UserWebPortal.findOneAndUpdate(query,fields));
  return {err,user}
} 


exports.getUser = async query => {
  const [err, user] = await To(UserWebPortal.findOne(query));
  return { err, user };
};

exports.getGrower = async query => {
  const [err, growerOne] = await To(grower.findOne(query));
  return { err, growerOne };
};

exports.getAllGrower = async query => {
  const [err, growerAll] = await To(grower.find(query));
  return { err, growerAll };
};

exports.updateGrower = async (query,fields) =>
{
  // {$addToSet:{growers:ObjectId}}
  const [err,upGrower] = await To(grower.findOneAndUpdate(query,fields));
  return {err,upGrower}
} 

// these services are for parties
exports.addParty = async fields => {
  fields.type = ACCOUNT_TYPE[4];
  let newParty = new party(fields);
  const [err, addParty] = await To(newParty.save());
  return { err, addParty };
};

exports.getParty = async query => {
  const [err, partyOne] = await To(party.findOne(query));
  return { err, partyOne };
};

exports.getAllParties = async query => {
  const [err, partyAll] = await To(party.find(query));
  return { err, partyAll };
};

exports.updateParty = async (query,fields) =>
{
  // {$addToSet:{growers:ObjectId}}
  const [err,upParty] = await To(party.findOneAndUpdate(query,fields));
  return {err,upParty}
} 

// this service is for adding accountLedger

exports.addAccountLedger = async fields => {
  let newAccountLedger = new accountledger(fields);
  const [err, addAccountLedger] = await To(newAccountLedger.save());
  return { err, addAccountLedger };
};