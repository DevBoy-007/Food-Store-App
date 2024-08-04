const { submit, check } = require("../models/Pizzamodel"); // service
const { display } = require("../models/Pizzamodel");
const { update } = require("../models/Pizzamodel");
const { Delete } = require("../models/Pizzamodel");
module.exports = {
    submit: async (body) => {
        try {
            const checking = await check(body.Pizzaid);
            if (checking.response == body.Pizzaid) {
                return {
                    response: " this Piza has already exist with this id",
                }
            }
            ///////////////////////////
            const submitresponse = await submit(body);
            if (submitresponse.error) {
                return {
                    error: submitresponse.error,
                }
            }
            return {
                response: submitresponse.response
            }
        } catch (error) {
            return {
                error: error.message
            }
        }
    },

    display: async () => {

        try {
            const displayresponse = await display()
            if (displayresponse.error) {
                return {
                    response: displayresponse.error
                }
            }
            return {
                response: displayresponse.response
            }
        }
        catch (error) {
            return {
                error: error.message
            }
        }

    },

    update: async (body) => {
        console.log(body)
        try {
            const updateresponse = await update(body);
            if (updateresponse.error) {
                return {
                    error: updateresponse.error
                }
            }
            return {
                response: updateresponse.response
            }
        }
        catch (error) {
            return {
                error: "service",
            }
        }
    },
    Delete: async (query) => {
        try {
            const deleteresponse = await Delete(query.Pizzaid);
            if (deleteresponse.error) {
                return {
                    error: deleteresponse.error
                }
            }
            return {
                response: deleteresponse.response
            }
        }
        catch (error) {
            return {
                error: "service"
            }
        }

    }



};