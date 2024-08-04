const { Model, DataTypes } = require("sequelize");
const Dbc = require("../../bin/dbConnection");
class Wraptable extends Model { };
Wraptable.init({
    Wrapid:
    {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,

    },
    Wrapimage:
    {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    Wrapflavour:
    {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    Wrapprice:
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
module.exports = Wraptable;


