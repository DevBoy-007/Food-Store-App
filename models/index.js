const Dbc = require("../bin/dbConnection"); // import conection-object
const Todolist = require("./definations/Todolist");     // import user table object
const Models = {   //  tables collective object
    todolist: Todolist,

};

const db = {}; // define tables,perform queries and connect with database
db.sequelize = Dbc;
Dbc.Models = Models;


module.exports = { db, Models };  // export object containing properties db,models