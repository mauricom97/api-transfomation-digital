'use strict'

module.exports = (sequelize, DataTypes) => {
    const clients = sequelize.define('Clients', {
        entity_uuid:{
          type: DataTypes.UUID,
          primaryKey: true 
        }
    },{
        tableName: 'clients',
        timestamps: false
    })
    return clients
}