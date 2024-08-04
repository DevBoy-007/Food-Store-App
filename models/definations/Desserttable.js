const { Model, DataTypes } = require("sequelize");
const Dbc = require("../../bin/dbConnection");
class Desserttable extends Model { };
Desserttable.init({
    Dessertid:
    {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,

    },
    Dessertimage:
    {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    Dessertflavour:
    {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    Dessertprice:
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
module.exports = Desserttable;


