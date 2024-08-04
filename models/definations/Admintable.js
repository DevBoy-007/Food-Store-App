const { Model, DataTypes } = require("sequelize");
const Dbc = require("../../bin/dbConnection");
class Admintable extends Model { };
Admintable.init({
    Adminname:
    {
        type: DataTypes.STRING,
        allowNull: false,

    },
    Adminemail:
    {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    Adminpassword:
    {
        type: DataTypes.STRING,
        allowNull: false,
    },

},
    {
        sequelize: Dbc,
        timestamps: true,
        paranoid: false,

    }
);
module.exports = Admintable;


