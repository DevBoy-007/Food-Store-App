const { Model, DataTypes } = require("sequelize");
const Dbc = require("../../bin/dbConnection");
class Pizzatable extends Model { };
Pizzatable.init({
    Pizzaid:
    {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,

    },
    Pizzaimage:
    {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    Pizzaflavour:
    {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    Pizzaprice:
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
module.exports = Pizzatable;


