'use strict'

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Users', {
        user_uuid: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
    
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    
        user_email : {
            type: DataTypes.STRING,
            allowNull: false
        },
    
        user_password : {
            type: DataTypes.STRING,
            allowNull: false,
        },

        date_birth : {
            type: DataTypes.DATE,
            allowNull: false
        },
        active : {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        img_perfil : {
            type: DataTypes.STRING
        }
    
    },{
        tableName: "users",
        timestamps: false,
    
        defaultScope: {
            attributes: { exclude: ['user_password'] }
        },
    
        scopes: {
            withPassword: {
                attributes: { },
            }
        }
    })

    return User
}