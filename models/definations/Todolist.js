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
        allowNull: true,
        unique: true,
    },
    Taskdescription:
    {
        type: DataTypes.STRING(30),
        allowNull: true,

    },
    Taskdeadline:
    {
        type: DataTypes.STRING(20),
        allowNull: true,
        unique: true,
    },
    Taskstrategy:
    {
        type: DataTypes.STRING(200),
        allowNull: false,
    },

    Taskcompletion:
    {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    Taskremaining:
    {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    Taskstatus:
    {
        type: DataTypes.STRING(200),
        allowNull: false,
    }
}, {
    sequelize: Dbc,
    timestamps: true,
    paranoid: true,
});
module.exports = Todolist;