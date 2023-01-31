const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("ticket", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        monto: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha_compra: {
            type: DataTypes.DATE,
            allowNull: false
        }
    })
}