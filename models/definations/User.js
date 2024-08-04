const { Model, DataTypes } = require("sequelize");
const Dbc = require("../../bin/dbConnection");
class UserTable extends Model { };
UserTable.init({
    Userid:
    {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
    },
    Username:
    {
        type: DataTypes.STRING(30),
        allowNull: false,

    },
    Userpassword:
    {
        type: DataTypes.STRING(),
        allowNull: false,
    },

},
    {
        sequelize: Dbc,
        timestamps: true,
        paranoid: true,

    }
);
module.exports = UserTable;