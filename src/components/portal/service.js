import { UserWebPortal } from "../../model/user/userWebPortal";
import { grower } from "../../model/grower/grower";

import To from "await-to-js";
import {
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
