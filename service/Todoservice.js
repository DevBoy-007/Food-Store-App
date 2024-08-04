const { submittask, checktask } = require("../models/Todomodel");
const { displaytask } = require("../models/Todomodel");
const { updatetask } = require("../models/Todomodel");
const { Deletetask } = require("../models/Todomodel");
module.exports = {
    submittask: async (body) => {
        try {
            const checking = await checktask(body.Taskid);
            if (checking.response == body.Taskid) {
                return {
                    response: "task has already exist with this id",
                }
            }
            ///////////////////////////
            const submitresponse = await submittask(body);
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

    displaytask: async () => {

        try {
            const displayresponse = await displaytask()
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

    updatetask: async (body) => {
        try {
            const updateresponse = await updatetask(body);
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
    Deletetask: async (query) => {
        try {
            const deleteresponse = await Deletetask(query.Taskid);
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
                error: error.message
            }
        }

    }



};