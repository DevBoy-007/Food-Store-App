const { Signfunction } = require("../models/signmodel");
const { hash } = require("bcryptjs");
module.exports = {
    Signfunction: async (body) => {
        try {
            const user = {
                Userid: body.Userid,
                Username: body.Username,
                Userpassword: await hash(body.Userpassword, 5),
            }
            const signresponse = await Signfunction(user);
            if (signresponse.error) {
                return {
                    error: signresponse.error,
                }
            }
            return {
                response: signresponse.response
            }

        }
        catch (error) {
            return {
                error: error.message
            }

        }
    }
}