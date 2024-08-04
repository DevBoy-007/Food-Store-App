const { submit } = require("../service/Pizzaservice"); // contrller
const { display } = require("../service/Pizzaservice")
const { update } = require("../service/Pizzaservice");
const { Delete } = require("../service/Pizzaservice");
const joi = require("joi"); // import joi object from joi module
const submitvalidationschema = joi.object().keys({
    Pizzaid: joi.string().required(),
    Pizzaimage: joi.string().required(),
    Pizzaflavour: joi.string().required(),
    Pizzaprice: joi.string().required(),
});
const showvalidationschema = joi.object().keys({
    Pizzaid: joi.string().required(),
})


module.exports = {
    submit: async (req, res) => {
        try {
            const { Pizzaid, Pizzaflavour, Pizzaprice } = req.body;

            // Handle file upload logic here
            const imageUrl = req.file ? req.file.path : '';
            const Pizza = {
                Pizzaid,
                Pizzaimage: imageUrl,
                Pizzaflavour,
                Pizzaprice
            };

            const validate = await submitvalidationschema.validateAsync(Pizza);
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
        console.log(req.body)
        try {
            const { Pizzaid, Pizzaflavour, Pizzaprice } = req.body;

            // Handle file upload logic here
            const imageUrl = req.file ? req.file.path : '';
            const Pizza = {
                Pizzaid,
                Pizzaimage: imageUrl,
                Pizzaflavour,
                Pizzaprice
            };
            const updateresponse = await update(Pizza);
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
                error: "controller",
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

