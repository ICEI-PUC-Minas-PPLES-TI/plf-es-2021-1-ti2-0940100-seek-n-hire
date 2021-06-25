const connection = require('../connection');
module.exports = {

  async store(req, res) {
    console.log(req.body)
    connection.query(`INSERT INTO Servico (campoServico, areaServico, taxaServico, horarioServico, diasServico, cpf) VALUES (?, ?, ?, ?, ?, ?);`, [
      req.body.campoServico,
      req.body.areaServico,
      req.body.taxaServico,
      req.body.horarioServico,
      req.body.diasServico,
      req.body.cpf,
    ], function (err, rows, fields) {
      if (err) {
        console.log(err);
        return res.json({ error: err })
      }
      return res.json({ result: 'Inseriu os dados' });
    })
  },

  async getService(req, res) {
    // função para pegar todos os serviços disponíveis com aquele
    connection.query('select * from Servico as s inner join Usuario as u on s.cpf = u.cpf where s.areaServico = ?', [
      req.body.areaServico
    ], function (err, rows, fields) {
      if (err) throw err;
      if (rows && rows.length) {
        res.send(rows);
      }
    });
  }
}