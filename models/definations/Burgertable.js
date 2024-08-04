const { Model, DataTypes } = require("sequelize");
const Dbc = require("../../bin/dbConnection");
class Burgertable extends Model { };
Burgertable.init({
    Burgerid:
    {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,

    },

    Burgerimage:
    {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },

    Burgerflavour:
    {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    Burgerprice:
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
module.exports = Burgertable;


