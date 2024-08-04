const { Adlogin } = require("../service/Adloginservice");
const joi = require("joi");
const Adloginvalidationschema = joi.object().keys({
    Adminname: joi.string().required(),
    Adminemail: joi.string().required(),
    Adminpassword: joi.string().required(),
})
module.exports = {
    Adlogin: async (req, res) => {
        try {
            const validate = await Adloginvalidationschema.validateAsync(req.body)
            const Adloginresponse = await Adlogin(validate);
            if (Adloginresponse.error) {
                return res.send({
                    error: Adloginresponse.error,
                })
            }
            //===============COOKIE================||
            /*  console.log("==>Controller (TOKEN VALUE )", loginresponse.response)
              const X = res.cookie("Logincookie", loginresponse.response, { maxAge: 25000, HttpOnly: true })
              console.log("cookie value", X)*/
            return res.send({
                response: Adloginresponse.response,
            })
        }
        catch (error) {
            return res.send({
                error: "controller"
            })

        }

    }
}