require("dotenv").config();
const { Sequelize } = require("sequelize");
const Dbc = new Sequelize({ // connectivity object
    // information about connectivity
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

});
Dbc.authenticate()          // authentification methode 
    .then((value) => {
        console.log("DB connected successfull", value);
    })
    .catch((error) => {
        console.log(error.message);
    });
module.exports = Dbc;