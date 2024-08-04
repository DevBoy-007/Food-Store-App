const { Model, DataTypes } = require("sequelize");
const Dbc = require("../../bin/dbConnection");
class Friestable extends Model { };
Friestable.init({
    Friesid:
    {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,

    },
    Friesimage:
    {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    Friesflavour:
    {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    Friesprice:
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
module.exports = Friestable;


