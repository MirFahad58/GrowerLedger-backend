// This Middleware is responsible for returning Error
module.exports = {
    error : (err , req , res , next) => {
      throw Error(err);
    }
};
  