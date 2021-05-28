module.exports = (sequelize, DataTypes) => {
    const Servico = sequelize.define(
      'Servico',
      {
        idServico: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        campoServico: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
        areaServico: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
        taxaServico: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
        horarioServico: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
        diasServico: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        Usuario_cpf: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
        },

      },
      {
        tableName: 'Servico',
      }
    );
  
    return Servico;
  };
  