'use strict'

module.exports = (sequelize, DataTypes) => {
    const session = sequelize.define('Sessions', {
        session_token:{
          type: DataTypes.STRING,
          primaryKey: true 
        },
        user_uuid:{
            type: DataTypes.UUID
          }
    },{
        tableName: 'sessions',
        timestamps: false
    })

    session.associate = function(models) {
        session.belongsTo(models.Users, {foreignKey : 'user_uuid'})
    }

    return session
}