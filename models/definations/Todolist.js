const { Model, DataTypes } = require("sequelize");
const Dbc = require("../../bin/dbConnection");
class Todolist extends Model { };
Todolist.init({
    Taskid:
    {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
    },
    Taskname:
    {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
    Taskstatus:
    {
        type: DataTypes.STRING(200),
        allowNull: false,
    }
}, {
    sequelize: Dbc,
    timestamps: true,
    paranoid: false,
});
module.exports = Todolist;