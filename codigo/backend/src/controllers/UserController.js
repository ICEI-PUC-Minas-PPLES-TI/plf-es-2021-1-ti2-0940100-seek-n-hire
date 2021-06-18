const connection = require('../connection');
module.exports = {
    async index(req, res) {
        connection.query('SELECT * FROM Usuario', function(err, rows, fields) {
          if (err) throw err;
            console.log('Todos usuários: ', rows);
            res.send(rows);
        });
    },

    async store(req, res) {
        console.log(req.body)
        connection.query(`INSERT INTO Usuario (cpf, nome, login, senha, datNasc) VALUES (?, ?, ?, ?, ?);`, [
          req.body.cpf,
          req.body.name,
          req.body.login,
          req.body.senha,
          req.body.datNasc,
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
        connection.query('SELECT * FROM Usuario where login = ?', [req.body.cpf], function(err, rows, fields) {
          if (err) throw err;
            res.send(rows[0]);
        });
    }
}