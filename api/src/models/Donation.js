const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("donation", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.ENUM({
                values:["500", "1000", "1500"]
            }),
            allowNull: false
        },
        donationDate: {
            type: DataTypes.DATE,
            allowNull: false
        }
    })
}