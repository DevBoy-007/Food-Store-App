const { Model, DataTypes } = require("sequelize");
const Dbc = require("../../bin/dbConnection");
class Ordertable extends Model { };
Ordertable.init({
    Orderid:
    {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,

    },
    Totalprice:
    {
        type: DataTypes.FLOAT,
        allowNull: false,

    },

},
    {
        sequelize: Dbc,
        timestamps: true,
        paranoid: false,

    }
);
module.exports = Ordertable;


