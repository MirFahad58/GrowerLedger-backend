// This Module will be used for creating verification strategy for sms verification and two way authentication

// Importing 3rd Party Modules
import passport from "passport";
import { Strategy , ExtractJwt } from "passport-jwt";
import { Types } from "mongoose";
import To from "await-to-js";
const { ObjectId } = Types;

// Importing Verification Model
import { Verification } from "../../model/verification/verification";

// Extracting Token From Header
const strategyOption = {
  jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken() ,
  secretOrKey : process.env.JWT_SECRET
};

passport.use(
  "Verification" ,
  new Strategy(strategyOption , async (jwtPayload , done) => {
    const { id } = jwtPayload;
    const [err , verification] = await To(Verification.findOne(ObjectId(id)));
    if (verification) done(null , verification);

    if (err) throw new Error(err);

    if (!verification) done(null , false);
  })
);

// Exporting passport js for Verification
export { passport };