const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("subscription", {
        id:{
            type: DataTypes.UUID,      
            defaultValue: DataTypes.UUIDV4,    
            allowNull: false,
            primaryKey : true
        },
        email:{
            type: DataTypes.STRING,
            allowNull: true
        },
        typeSubscription: {
            type: DataTypes.STRING,
            allowNull: false
        },
        detailSubscription: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false        
        },
        cupo:{
            type: DataTypes.INTEGER
        }
    })
}