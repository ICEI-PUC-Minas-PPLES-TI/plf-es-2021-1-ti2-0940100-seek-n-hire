module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define(
      'Endereco',
      {
        idEndereco: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        Usuario_cpf: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
        },
        cep: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        logradouro: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
        cidade: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
        bairro: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
        estado: {
            type: DataTypes.STRING(2),
            allowNull: false,
        },

      },
      {
        tableName: 'Endereco',
      }
    );
  
    return Endereco;
  };
  