const { Model, DataTypes } = require("sequelize");
const Dbc = require("../../bin/dbConnection");
class Drinktable extends Model { };
Drinktable.init({
    Drinkid:
    {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,

    },
    Drinkimage:
    {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    Drinkflavour:
    {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    Drinkprice:
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
module.exports = Drinktable;


