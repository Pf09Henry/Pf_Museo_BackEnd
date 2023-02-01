const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("subscription", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email:{
            type: DataTypes.STRING,
            allowNull: true
        }
    })
}