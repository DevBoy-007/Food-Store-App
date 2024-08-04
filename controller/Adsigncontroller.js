const { Adsignfunction } = require("../service/Adsignservice"); // controller
const joi = require("joi");
const Adsignvalidation = joi.object().keys({
    Adminname: joi.string().required(),
    Adminemail: joi.string().required(),
    Adminpassword: joi.string().required(),
});

module.exports = {
    Adsignfunction: async (req, res) => {
        try {
            const validate = await Adsignvalidation.validateAsync(req.body);
            const Adsignresponse = await Adsignfunction(validate);
            if (Adsignresponse.error) {
                return res.send({
                    error: Adsignresponse.error,
                }
                )
            }
            return res.send({
                response: Adsignresponse.response
            })

        }
        catch (error) {
            return res.send({
                error: "controller"
            }
            )

        }
    }
}