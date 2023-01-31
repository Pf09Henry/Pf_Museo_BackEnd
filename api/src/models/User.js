const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("user", {
        id:{
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        addmin: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    })
}