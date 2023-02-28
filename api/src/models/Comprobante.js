const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("comprobante", {
        id:{
            type: DataTypes.UUID,      
            defaultValue: DataTypes.UUIDV4,    
            allowNull: false,
            primaryKey : true
        },        
        totalOfPurchase: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        methodOfPurchase: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        statusOfPurchase: {
            type: DataTypes.ENUM('aprobado', 'pendiente', 'rechazado', 'cancelado'),
            defaultValue: 'aprobado'
        }
    })
}