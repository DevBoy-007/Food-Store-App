const { Models } = require("../models/index");
module.exports = {
    submittask: async (body) => {
        try {
            const submitresponse = await Models.todolist.create({ ...body })//cloning 
            return {
                response: "task has submitted",
            }
        }
        catch (error) {
            return {
                error: error.message
            }
        }
    },

    displaytask: async () => {
        try {
            const displayresponse = await Models.todolist.findAll({})

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

    updatetask: async (body) => {
        try {
            const updateresponse = await Models.todolist.update(body, {

                where: {
                    Taskid: body.Taskid
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

    Deletetask: async (Taskname) => {
        try {
            const deleteresponse = await Models.todolist.destroy({

                truncate: Taskname

            });
            return {
                response: `All task has deleted`
            }
        }
        catch (error) {
            return {
                error: error.message,
            }
        }
    }
};