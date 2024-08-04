/*const { verify } = require("jsonwebtoken"); //verify cookie
require("dotenv").config() /// for secret key value,
module.exports = {
    Middleware: async (req, res, next) => {
        try {
            console.log("===>Middleware", req.cookies.Logincookie);
            if (req.cookies.Logincookie == undefined) {
                return res.send({
                    error: "Cookie not exist"
                })
            }
            verify(req.cookies.logincookie, process.env.SECRET_KEY, (error, User) => {
                console.log("====>", User)
                if (error) {
                    return res.send({
                        error: "UnAuthorized User and securitykey"
                    })
                }
                next()
            })
        }
        catch (error) {
            return {
                error: error.message
            }
        }
    }
}*/