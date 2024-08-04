const { Models } = require("../models/index");


module.exports = {
    Signfunction: async (body) => {
        try {
            const signresponse = await Models.user.create(body);
            return {
                response: "User has register",
            }
        }
        catch (error) {
            return {
                error: error.message,
            }
        }
    }
}
