const express = require('express');
const cursoController = require('../controllers/cursos.controller');

const router = express.Router();


router.post('/cursos', cursoController.cadastrarCurso);

module.exports = router;
