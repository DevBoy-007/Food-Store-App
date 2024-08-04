const { Signfunction } = require("../service/signservice");
const joi = require("joi");
const signvalidation = joi.object().keys({
    Userid: joi.string().required(),
    Username: joi.string().required(),
    Userpassword: joi.string().required(),
});

module.exports = {
    Signfunction: async (req, res) => {
        try {
            const validate = await signvalidation.validateAsync(req.body);
            const signresponse = await Signfunction(validate);
            if (signresponse.error) {
                return res.send({
                    error: signresponse.error,
                }
                )
            }
            return res.send({
                response: signresponse.response
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