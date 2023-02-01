const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("event", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        startDay: {
            type: DataTypes.DATE,
            allowNull: false
        },
        endDay: {
            type: DataTypes.DATE,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        information: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}