const { Models } = require("../models/index"); //model
module.exports = {
    Adlogin: async (Adminemail) => {
        try {
            const Adloginresponse = await Models.Admintable.findAll({
                attributes: ["Adminname", "Adminemail", "Adminpassword"],
                where: {
                    Adminemail: Adminemail
                }
            });

            return {
                response: Adloginresponse,

            }
        }
        catch (error) {
            return {
                error: error.message
            }
        }
    }
}