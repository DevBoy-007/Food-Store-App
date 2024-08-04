const { Login } = require("../models/Loginmodel");
const { compare } = require("bcryptjs");
//const { sign } = require("jsonwebtoken");
module.exports = {
   Login: async (body) => {
      try {
         const loginresponse = await Login(body.Username);
         if (loginresponse.error || loginresponse.response.length == 0) {
            return {
               error: "invalid user",
            }
         }
         const checkpassword = await
            compare(body.Userpassword, loginresponse.response[0].Userpassword)
         if (checkpassword == false) {
            return {
               error: "Invalid Password"
            }
         }
         ///===========================Token====================================||
         /*  delete body.Userpassword
         const jwt = sign(body, process.env.SECRET_KEY, { expiresIn: "20000" });
         */
         console.log("service")
         return {
            response: "user has login",
         }
      } catch (error) {
         return {
            error: error.message

         }
      }
   }

}