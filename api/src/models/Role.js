const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("role", {
        id:{
            type: DataTypes.UUID,      
            defaultValue: DataTypes.UUIDV4,    
            allowNull: false,
            primaryKey : true
        },
        name: {
            type: DataTypes.ENUM,
            values: ['finance', 'super_admin', 'admin', 'content_creator', 'user', 'subscriber']
        }
    })
}