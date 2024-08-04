const { submit, check } = require("../models/wrapmodel"); // service
const { display } = require("../models/wrapmodel");
const { update } = require("../models/wrapmodel");
const { Delete } = require("../models/wrapmodel");
module.exports = {
    submit: async (body) => {
        try {
            const checking = await check(body.Wrapid);
            if (checking.response == body.Wrapid) {
                return {
                    response: " this Wrap has already exist with this id",
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
                error: error.message,
            }
        }
    },
    Delete: async (query) => {
        try {
            const deleteresponse = await Delete(query.Wrapid);
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