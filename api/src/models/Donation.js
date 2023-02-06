const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("donation", {
        id:{
            type: DataTypes.UUID,      
            defaultValue: DataTypes.UUIDV4,    
            allowNull: false,
            primaryKey : true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        donationDate: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}