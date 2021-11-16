'use strict'

const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Contract = sequelize.define('Contract', {
        uuid:{
            type: DataTypes.UUID,
            primaryKey: true
        },
        numContract: DataTypes.INTEGER,
        dtStart: DataTypes.DATE,
        dtEnd: DataTypes.DATE,
        price: DataTypes.DECIMAL,
        active: DataTypes.BOOLEAN,
        note: DataTypes.TEXT,

    },{
        tableName: 'contracts'
    })

    return Contract
}