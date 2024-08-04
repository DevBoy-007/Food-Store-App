const { Models } = require("../models/index"); // model
module.exports = {
    submit: async (body) => {
        try {

            //////////
            const submitresponse = await Models.Pizzatable.create(body)//cloning  
            return {
                response: "Pizza has submitted"
            }
        }
        catch (error) {
            return {
                error: error.message
            }
        }
    },

    display: async () => {
        try {
            const displayresponse = await Models.Pizzatable.findAll();

            return {
                response: displayresponse
            }
        }
        catch (error) {
            return {
                error: error.message
            }
        }
    },

    update: async (body) => {

        console.log("hello hamzaqayyum")
        console.log(body)
        try {
            const updateresponse = await Models.Pizzatable.update(body, {
                where: {
                    Pizzaid: body.Pizzaid,
                }
            });
            return {
                response: updateresponse,
            }
        }
        catch (error) {
            return {
                error: "model"
            }
        }

    },

    Delete: async (Pizzaid) => {
        try {
            const deleteresponse = await Models.Pizzatable.destroy({
                where: {
                    Pizzaid: Pizzaid
                }
            });
            return {
                response: ` Pizza has deleted`
            }
        }
        catch (error) {
            return {
                error: error.message,
            }
        }
    },
    check: async (Pizzaid) => {

        try {
            const checkresponse = await Models.Pizzatable.findAll({
                attributes: ["Pizzaid"],
                where: {
                    Pizzaid: Pizzaid
                }
            });
            return {
                response: checkresponse[0].Pizzaid
            }
        }
        catch (error) {
            return {
                error: "model"
            }
        }

    },
};