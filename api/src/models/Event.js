const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("event", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        startDay: {
            type: DataTypes.DATE,
            allowNull: false
        },
        endDay: {
            type: DataTypes.DATE,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        information: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: null
        }
    })
}

// evento como muy largo un finde. precio, añdir guia!.
// al evento asignarle mas de un guia.
// eventos por categoria 
// exhibiciones se elimina
