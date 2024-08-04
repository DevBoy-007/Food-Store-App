const { Models } = require("../models/index"); // model
module.exports = {
    submit: async (body) => {
        try {

            //////////
            const submitresponse = await Models.Burgertable.create(body)//cloning  
            return {
                response: "Burger has submitted"
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
            const displayresponse = await Models.Burgertable.findAll();
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
            const updateresponse = await Models.Burgertable.update(body, {
                where: {
                    Burgerid: body.Burgerid,
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

    Delete: async (Burgerid) => {
        try {
            const deleteresponse = await Models.Burgertable.destroy({
                where: {
                    Burgerid: Burgerid
                }
            });
            return {
                response: ` Burger has deleted`
            }
        }
        catch (error) {
            return {
                error: error.message,
            }
        }
    },
    check: async (Burgerid) => {

        try {
            const checkresponse = await Models.Burgertable.findAll({
                attributes: ["Burgerid"],
                where: {
                    Burgerid: Burgerid
                }
            });
            return {
                response: checkresponse[0].Burgerid
            }
        }
        catch (error) {
            return {
                error: error.message
            }
        }

    },
};