const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("evento", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        inicio: {
            type: DataTypes.DATE,
            allowNull: false
        },
        fin: {
            type: DataTypes.DATE,
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: false
        },
        informacion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}