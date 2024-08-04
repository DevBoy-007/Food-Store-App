const { Models } = require("../models/index"); // model
module.exports = {
    submit: async (body) => {
        try {

            //////////
            const submitresponse = await Models.Wraptable.create(body)//cloning  
            return {
                response: "Wrap has submitted"
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
            const displayresponse = await Models.Wraptable.findAll();
            console.log(displayresponse)
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
        try {
            const updateresponse = await Models.Wraptable.update(body, {
                where: {
                    Wrapid: body.Wrapid,
                }
            });
            return {
                response: updateresponse,
            }
        }
        catch (error) {
            return {
                error: error.message
            }
        }

    },

    Delete: async (Wrapid) => {
        try {
            const deleteresponse = await Models.Wraptable.destroy({
                where: {
                    Wrapid: Wrapid
                }
            });
            return {
                response: ` Wrap has deleted`
            }
        }
        catch (error) {
            return {
                error: error.message,
            }
        }
    },
    check: async (Wrapid) => {

        try {
            const checkresponse = await Models.Wraptable.findAll({
                attributes: ["Wrapid"],
                where: {
                    Wrapid: Wrapid
                }
            });
            return {
                response: checkresponse[0].Wrapid
            }
        }
        catch (error) {
            return {
                error: "model"
            }
        }

    },
};