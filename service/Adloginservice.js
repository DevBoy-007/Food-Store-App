const { Adlogin } = require("../models/Adloginmodel");
const { compare } = require("bcryptjs");
//const { sign } = require("jsonwebtoken");
module.exports = {
    Adlogin: async (body) => {
        try {
            const Adloginresponse = await Adlogin(body.Adminemail);
            //  console.log(Adloginresponse.response);
            if (!Adloginresponse || Adloginresponse.error || !Adloginresponse.response || Adloginresponse.response.length === 0) {
                return {
                    error: " Admin not register",
                }
            }
            if (body.Adminname != Adloginresponse.response[0].Adminname) {
                return {
                    error: " Invalid Admin name"
                }
            }
            const checkpassword = await
                compare(body.Adminpassword, Adloginresponse.response[0].Adminpassword);
            if (checkpassword == false) {
                return {
                    error: "Invalid Password"
                }
            }
            ///===========================Token====================================||
            /*  delete body.Userpassword
            const jwt = sign(body, process.env.SECRET_KEY, { expiresIn: "20000" });
            */
            return {
                response: "admin has login",
            }
        } catch (error) {
            return {
                error: error.message

            }
        }
    }

}