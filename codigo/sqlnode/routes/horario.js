const express = require('express');

const router = express.Router();

//const controllers = require('../controllers');
const ordemProducaoController = require('../controllers/ordemProducao');
//get,post(criar),put(atualizar),delete
router.get('/', (req, res) => {
  controllers.execute(req, res, ordemProducaoController.getOrdemProducao);
});
// index buscar todos
// store salvar dado novo
// update alterar dados
// delete
router.get('/', ordemProducaoController.index);


router.put('/marcaOrdemComoImpostada', (req, res) => {
  req.body.status = 'EM_PRODUCAO';
  controllers.execute(req, res, ordemProducaoController.atualizaOrdemProducao);
});

router.put('/marcaOrdemComoDeliberada', (req, res) => {
  req.body.status = 'CONCLUIDA';
  controllers.execute(req, res, ordemProducaoController.atualizaOrdemProducao);
});

router.put('/marcaOrdemComoAguardando', (req, res) => {
  req.body.status = 'AGUARDANDO';
  controllers.execute(req, res, ordemProducaoController.atualizaOrdemProducao);
});

module.exports = router;
