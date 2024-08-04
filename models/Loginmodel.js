const { Models } = require("../models/index");
module.exports = {
    Login: async (Username) => {
        try {
            const loginresponse = await Models.user.findAll({
                attributes: ["Username", "Userpassword"],
                where: {
                    Username: Username
                }
            });
            return {
                response: loginresponse,

            }
        }
        catch (error) {
            return {
                error: error.message
            }
        }
    }
}