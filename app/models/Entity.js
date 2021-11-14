'use strict'

module.exports = (sequelize, DataTypes) => {
    const Entity = sequelize.define('Entity', {
        uuid:{
            type: DataTypes.UUID,
            primaryKey: true
        },
        fantasy_name: DataTypes.STRING,
        corporate_name: DataTypes.STRING,
        cep: DataTypes.STRING,
        address: DataTypes.STRING,
        state: DataTypes.STRING,
        city: DataTypes.STRING,
        cpf_cnpj: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },{
        tableName: 'entities'
      });
  
    return Entity;
  }