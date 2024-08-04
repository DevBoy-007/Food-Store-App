const Dbc = require("../bin/dbConnection"); // import conection-object
const Todolist = require("./definations/Todolist");     // import user table class
const UserTable = require("./definations/User");     // import user table class
const Admintable = require("./definations/Admintable");
const Pizzatable = require("./definations/Pizzatable");
const Burgertable = require("./definations/Burgertable");
const Wraptable = require("./definations/Wraptable");
const Shawarmatable = require("./definations/Shawarmatable");
const Friestable = require("./definations/Friestable");
const Desserttable = require("./definations/Desserttable");
const Drinktable = require("./definations/Drinktable");
const Customertable = require("./definations/Customertable");
const Ordertable = require("./definations/Ordertable");
//  Relations of order table with other tables 
Ordertable.belongsTo(Customertable); // Many-to-One between orders and customers
Customertable.hasMany(Ordertable); // One-to-Many between customers and orders

Ordertable.belongsToMany(Pizzatable, { through: 'OrderPizzas' }); // Many-to-Many between orders and pizzas
Pizzatable.belongsToMany(Ordertable, { through: 'OrderPizzas' });

Ordertable.belongsToMany(Burgertable, { through: 'OrderBurgers' }); // Many-to-Many between orders and burgers
Burgertable.belongsToMany(Ordertable, { through: 'OrderBurgers' });

Ordertable.belongsToMany(Wraptable, { through: 'OrderWraps' }); // Many-to-Many between orders and wraps
Wraptable.belongsToMany(Ordertable, { through: 'OrderWraps' });
const Models = {   //  tables collective object
    todolist: Todolist,
    user: UserTable,
    Admintable: Admintable,
    Pizzatable: Pizzatable,
    Burgertable: Burgertable,
    Wraptable: Wraptable,
    Shawarmatable: Shawarmatable,
    Friestable: Friestable,
    Desserttable: Desserttable,
    Drinktable: Drinktable,
    Customertable: Customertable,
    Ordertable: Ordertable,
};
const db = {}; // define tables,perform queries and connect with database
db.sequelize = Dbc;
Dbc.Models = Models;
module.exports = { db, Models };  // export object containing properties db,models