const { Login } = require("../service/Loginservice");
const joi = require("joi");
const validationschema = joi.object().keys({
    Username: joi.string().required(),
    Userpassword: joi.string().required(),
})
module.exports = {
    Login: async (req, res) => {
        try {
            const validate = await validationschema.validateAsync(req.body)
            const loginresponse = await Login(validate);
            console.log("controller")
            if (loginresponse.error) {
                return res.send({
                    error: loginresponse.error,
                })
            }
            //===============COOKIE================||
            /*  console.log("==>Controller (TOKEN VALUE )", loginresponse.response)
              const X = res.cookie("Logincookie", loginresponse.response, { maxAge: 25000, HttpOnly: true })
              console.log("cookie value", X)*/
            return res.send({
                response: loginresponse.response,
            })
        }
        catch (error) {
            return res.send({
                error: error.message
            })

        }

    }
}