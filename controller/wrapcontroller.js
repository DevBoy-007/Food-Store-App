const { submit } = require("../service/Wrapservice"); // controller
const { display } = require("../service/Wrapservice")
const { update } = require("../service/Wrapservice");
const { Delete } = require("../service/Wrapservice");
const joi = require("joi"); // import joi object from joi module
const submitvalidationschema = joi.object().keys({
    Wrapid: joi.string().required(),
    Wrapimage: joi.string().required(),
    Wrapflavour: joi.string().required(),
    Wrapprice: joi.string().required(),
});
const showvalidationschema = joi.object().keys({
    Wrapid: joi.string().required(),
})


module.exports = {
    submit: async (req, res) => {
        try {
            const { Wrapid, Wrapflavour, Wrapprice } = req.body;

            // Handle file upload logic here
            const imageUrl = req.file ? req.file.path : '';
            const Wrap = {
                Wrapid,
                Wrapimage: imageUrl,
                Wrapflavour,
                Wrapprice
            };

            const validate = await submitvalidationschema.validateAsync(Wrap);
            const submitresponse = await submit(validate);
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
    display: async (req, res) => {
        try {
            const validate = await showvalidationschema.validateAsync();
            const displayresponse = await display(validate)
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

    update: async (req, res) => {
        try {
            const { Wrapid, Wrapflavour, Wrapprice } = req.body;

            // Handle file upload logic here
            const imageUrl = req.file ? req.file.path : '';
            const Wrap = {
                Wrapid,
                Wrapimage: imageUrl,
                Wrapflavour,
                Wrapprice
            };
            const updateresponse = await update(Wrap);
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

    Delete: async (req, res) => {
        try {
            const deleteresponse = await Delete(req.query);
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
                error: "controller",
            })
        }
    },



};

