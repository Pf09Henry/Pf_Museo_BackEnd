const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("resenia", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comentario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        puntaje: {
            type: DataTypes.INTEGER,
            validate: {min: 1, max: 5},
            allowNull: false
        }
    })
}