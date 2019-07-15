// This Module is responsible for handeling validations for db model
import validate from "mongoose-validator";

// Exporting Validations for mongoose
module.exports = {
  isName : () => [
    validate({
      validator : "isLength" ,
      arguments : [3 , 50] ,
      message : "Name should be between 3 and 50 characters"
    })
  ] ,
  isCompanyName : () => [
    validate({
      validator : "isLength" ,
      arguments : [3 , 50] ,
      message : "Name should be between 3 and 50 characters"
    })
  ] ,
  isEmail : () => [
    validate({
      validator : "isEmail" ,
      message : "This field should be email"
    })
  ] ,
  isPassword : () => [
    validate({
      validator : "isLength" ,
      arguments : [5 , 50] ,
      message : "Password should be between 5 and 50 characters"
    })
  ] ,
  isPhoneNumber : () => [
    validate({
      validator : "isMobilePhone" ,
      message : "This field should be phone number"
    })
  ] ,
  isURL : () => [
    validate({
      validator : "isURL" ,
      message : "This field should be URL"
    })
  ]
};
