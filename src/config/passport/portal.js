// This Module will be used for creating portal strategy for (transporter , shipper , local shipper)

// Importing 3rd Party Modules
import passport from "passport";
import { Strategy , ExtractJwt } from "passport-jwt";
import { Types } from "mongoose";
import To from "await-to-js";
const { ObjectId } = Types;

// Importing User Web Portal Model
import { UserWebPortal } from "../../model/user/userWebPortal";

// Extracting Token From Header
const strategyOption = {
  jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken() ,
  secretOrKey : process.env.JWT_SECRET
};

passport.use(
  "UserWebPortal" ,
  new Strategy(strategyOption , async (jwtPayload , done) => {
    const { id } = jwtPayload;
    const [err , portal] = await To(UserWebPortal.findOne(ObjectId(id)));
    if (portal) done(null , portal);

    if (err) throw new Error(err);

    if (!portal) done(null , false);
  })
);

// Exporting passport js for Web Portal User
export { passport };