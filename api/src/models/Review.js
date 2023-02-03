const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("review", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        commentary: {
            type: DataTypes.STRING,
            allowNull: false
        },
        score: {
            type: DataTypes.INTEGER,
            validate: {min: 1, max: 5},
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: null
        }
    })
}