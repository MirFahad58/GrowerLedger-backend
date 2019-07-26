import { UserWebPortal } from "../../model/user/userWebPortal";
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

exports.getUser = async query => {
  const [err, user] = await To(UserWebPortal.findOne(query));
  return { err, user };
};
