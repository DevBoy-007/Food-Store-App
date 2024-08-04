const { submittask } = require("../service/Todoservice");
const { displaytask } = require("../service/Todoservice")
const { updatetask } = require("../service/Todoservice");
const { Deletetask } = require("../service/Todoservice");
const joi = require("joi"); // import joi object from joi module
const submitvalidationschema = joi.object().keys({
    Taskid: joi.string().required(),
    Taskname: joi.string().required(),
    Taskstatus: joi.string().required(),
});
const showvalidationschema = joi.object().keys({
    Taskid: joi.string().required(),
})


module.exports = {
    submittask: async (req, res) => {
        try {
            const validate = await submitvalidationschema.validateAsync(req.body);
            const submitresponse = await submittask(validate);
            if (submitresponse.error) {
                return res.send({
                    error: submitresponse.error
                });
            }
            return res.send({
                response: submitresponse.response,
            });
        }
        catch (error) {
            return res.send({
                error: error.message
            })
        }
    },
    displaytask: async (req, res) => {
        try {
            const validate = await showvalidationschema.validateAsync();
            const displayresponse = await displaytask(validate)
            if (displayresponse.error) {
                return res.send({
                    response: displayresponse.error,
                })
            }
            return res.send({
                response: displayresponse.response
            })
        }
        catch (error) {
            return res.send({
                error: error.message
            })
        }
    },

    updatetask: async (req, res) => {
        try {
            const updateresponse = await updatetask(req.body);
            if (updateresponse.error) {
                return res.send({
                    error: updateresponse.error
                })
            }
            return res.send({
                response: updateresponse.response,
            })

        }
        catch (error) {
            return res.send({
                error: updateresponse.error,
            })
        }

    },

    Deletetask: async (req, res) => {
        try {
            const deleteresponse = await Deletetask(req.query);
            if (deleteresponse.error) {
                return res.send({
                    error: deleteresponse.error
                })
            }
            return res.send({
                response: deleteresponse.response
            })
        }
        catch (error) {
            return res.send({
                error: error.message,
            })
        }
    },



};

