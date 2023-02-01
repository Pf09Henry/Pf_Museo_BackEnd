const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("exhibition", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        categori: {
            type: DataTypes.ENUM("Paleontología", "Geología y Mineralogía", "Biodiversidad"),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}