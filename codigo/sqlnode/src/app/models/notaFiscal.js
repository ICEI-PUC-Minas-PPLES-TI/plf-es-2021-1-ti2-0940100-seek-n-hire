module.exports = (sequelize, DataTypes) => {
    const notaFiscal = sequelize.define(
      'notaFiscal',
      {
        idnotaFiscal: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        agendaServico_servico_idservico: {
          type: DataTypes.STRING(45),
          foreignKey: true,
          allowNull: false,
        },
        valor: {
          type: DataTypes.FLOAT,
          allowNull: false,
        }

      },
      {
        tableName: 'notaFiscal',
      }
    );
  
    return notaFiscal;
  };
  