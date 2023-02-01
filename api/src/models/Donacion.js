const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("donacion", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_tipo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        monto: {
            type: DataTypes.ENUM({
                values:["500", "1000", "1500"]
            }),
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        }
    })
}