const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("ticket", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dateOfPurchase: {
            type: DataTypes.DATE,
            allowNull: false
        },
        method: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}

//ver detalle de compras, veo eso, cantidad de tickes comprados