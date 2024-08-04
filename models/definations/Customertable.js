const { Model, DataTypes } = require("sequelize");
const Dbc = require("../../bin/dbConnection");
class Customertable extends Model { };
Customertable.init({
    Customid:
    {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,

    },
    Customemail:
    {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    Customaddress:
    {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    Customphone:
    {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },

},
    {
        sequelize: Dbc,
        timestamps: true,
        paranoid: false,

    }
);
module.exports = Customertable;


