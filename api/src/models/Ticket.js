const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("ticket", {
        id:{
            type: DataTypes.UUID,      
            defaultValue: DataTypes.UUIDV4,    
            allowNull: false,
            primaryKey : true
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
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

//ver detalle de compras, veo eso, cantidad de tickes comprados