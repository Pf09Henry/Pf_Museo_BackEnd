const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("event", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            notNull: true
        },
        startDay: {
            type: DataTypes.STRING,
            allowNull: false
        },
        endDay: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        availability: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        img: {
            type: DataTypes.TEXT("long"),
            allowNull: false
        },
        information: {
            type: DataTypes.TEXT("long"),
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN
        }
    })
}

// evento como muy largo un finde. precio, añdir guia!.
// al evento asignarle mas de un guia.
// eventos por categoria 
// exhibiciones se elimina
