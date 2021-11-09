'use strict'

module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
        uuid:{
            type: DataTypes.UUID,
            primaryKey: true
        },
        name: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        cpf_cnpj: DataTypes.STRING,
        birth_date: DataTypes.DATE
      });
  
    return Client;
  }