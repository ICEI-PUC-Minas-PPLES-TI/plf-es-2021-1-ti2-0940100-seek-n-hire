module.exports = (sequelize, DataTypes) => {
    const AgendaServico = sequelize.define(
      'AgendaServico',
      {
        idAgendaServico: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Usuario_cpf: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        Servico_idServico: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false,
        },
        dataHora: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status_servico: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

      },
      {
        tableName: 'agendaServico',
      }
    );
  
    return AgendaServico;
  };
  