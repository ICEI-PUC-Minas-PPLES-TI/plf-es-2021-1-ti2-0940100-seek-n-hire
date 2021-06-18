const connection = require('../connection');
module.exports = {
    async index(req, res) {
        connection.query('SELECT * FROM Servico', function(err, rows, fields) {
          if (err) throw err;
            console.log('Todos servicos: ', rows);
            res.send(rows);
        });
    },

    async store(req, res) {
        console.log(req.body)
        connection.query(`INSERT INTO Servico (campoServico, areaServico, taxaServico, horarioServico, diasServico) VALUES (?, ?, ?, ?, ?);`, [
          req.body.campoServico,
          req.body.areaServico,
          req.body.taxaServico,
          req.body.horarioServico,
          req.body.diasServico,
        ],function(err, rows, filds) {
          if(err){
            console.log(err);
            return res.json({error: err})
          }
          return res.json({result: 'Inseriu os dados'});
        })
     },
    
    async getOne(req, res) {
        // função para pegar apenas um usuario
        connection.query('SELECT * FROM Servico where areaServico = ?', [req.body.cpf], function(err, rows, fields) {
          if (err) throw err;
            res.send(rows[0]);
        });
    }
}