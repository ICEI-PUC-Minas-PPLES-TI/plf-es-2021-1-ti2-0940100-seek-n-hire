module.exports = (sequelize, DataTypes) => {
    const Cartao = sequelize.define(
      'Cartao',
      {
        usuario_cpf: {
          type: DataTypes.INTEGER,
          allowNull: false,
          foreignKey: true,
        },
        nomeTitularCartao: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        numeroCartao: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        CVV: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },

      },
      {
        tableName: 'Cartao',
      }
    );
  
    return Cartao;
  };
  