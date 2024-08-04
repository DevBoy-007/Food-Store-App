const { Models } = require("../models/index");
module.exports = {
    submittask: async (body) => {
        try {

            //////////
            const submitresponse = await Models.todolist.create(body)//cloning  
            return {
                response: "task has submitted"
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
            const displayresponse = await Models.todolist.findAll();
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

    updatetask: async (body) => {
        try {
            const updateresponse = await Models.todolist.update(body, {
                where: {
                    Taskid: body.Taskid,
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

    Deletetask: async (Taskid) => {
        try {
            const deleteresponse = await Models.todolist.destroy({
                where: {
                    Taskid: Taskid
                }
            });
            return {
                response: ` task has deleted`
            }
        }
        catch (error) {
            return {
                error: error.message,
            }
        }
    },
    checktask: async (Taskid) => {

        try {
            const checkresponse = await Models.todolist.findAll({
                attributes: ["Taskid"],
                where: {
                    Taskid: Taskid
                }
            });
            return {
                response: checkresponse[0].Taskid
            }
        }
        catch (error) {
            return {
                error: error.message
            }
        }

    },
};