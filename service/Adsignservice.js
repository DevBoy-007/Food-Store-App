const { Adsignfunction } = require("../models /Adsignmodel"); // service
const { hash } = require("bcryptjs");
module.exports = {
    Adsignfunction: async (body) => {
        try {
            const admin = {
                Adminname: body.Adminname,
                Adminemail: body.Adminemail,
                Adminpassword: await hash(body.Adminpassword, 5),
            }
            const Adsignresponse = await Adsignfunction(admin);
            if (Adsignresponse.error) {
                return {
                    error: Adsignresponse.error,
                }
            }
            return {
                response: Adsignresponse.response
            }

        }
        catch (error) {
            return {
                error: "service"
            }

        }
    }
}