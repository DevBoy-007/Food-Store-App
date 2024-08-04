const { submit } = require("../service/Burgerservice"); // contrller
const { display } = require("../service/Burgerservice")
const { update } = require("../service/Burgerservice");
const { Delete } = require("../service/Burgerservice");
const joi = require("joi"); // import joi object from joi module
const submitvalidationschema = joi.object().keys({
    Burgerid: joi.string().required(),
    Burgerimage: joi.string().required(),
    Burgerflavour: joi.string().required(),
    Burgerprice: joi.string().required(),
});
const showvalidationschema = joi.object().keys({
    Pizzaid: joi.string().required(),
})


module.exports = {
    submit: async (req, res) => {
        try {
            const { Burgerid, Burgerflavour, Burgerprice } = req.body;

            // Handle file upload logic here
            const imageUrl = req.file ? req.file.path : '';
            const Burger = {
                Burgerid,
                Burgerimage: imageUrl,
                Burgerflavour,
                Burgerprice
            };

            const validate = await submitvalidationschema.validateAsync(Burger);
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
            const { Burgerid, Burgerflavour, Burgerprice } = req.body;
            // Handle file upload logic here
            const imageUrl = req.file ? req.file.path : '';
            const Burger = {
                Burgerid,
                Burgerimage: imageUrl,
                Burgerflavour,
                Burgerprice
            };
            const updateresponse = await update(Burger);
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
    //==================================================
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
                error: error.message,
            })
        }
    },



};

