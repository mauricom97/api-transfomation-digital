'use strict'

const Client = require('./Client')

module.exports = (sequelize, DataTypes) => {
    const clientsContracts = sequelize.define('clientContract', {
        uuid:{
            type: DataTypes.UUID,
            primaryKey: true
        },
        client_uuid:{
            type: DataTypes.UUID,
        },
        contract_uuid:{
            type: DataTypes.UUID,
        },
    },{
        tableName: 'client_contract',
        timestamps: false
    })

    return clientsContracts
}