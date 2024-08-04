const { Models } = require("./index"); // model
module.exports = {
    Adsignfunction: async (body) => {
        try {
            const Adsignresponse = await Models.Admintable.create(body);
            return {
                response: "Admin has register",
            }
        }
        catch (error) {
            return {
                error: error.message,
            }
        }
    },

    getFunction: async (body) => {
        try {

            return {
                response: "Admin has register",
            }
        }
        catch (error) {
            return {
                error: error.message,
            }
        }
    }
}