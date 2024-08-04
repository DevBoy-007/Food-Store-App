const { Model, DataTypes } = require("sequelize");
const Dbc = require("../../bin/dbConnection");
class Shawarmatable extends Model { };
Shawarmatable.init({
    Shawarmaid:
    {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,

    },
    Shawarmaimage:
    {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    Shawarmaflavour:
    {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    Shawarmaprice:
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
module.exports = Shawarmatable;


