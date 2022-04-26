const path = require('path');
const fs = require('fs');

const listaDeCursos = require('../models/cursos.json');


const cursoController = {

  cadastrarCurso(req, res) {
    const {titulo, descricao, professor} = req.body;
    
    if(!titulo || !descricao || !professor) {
      return res.status(400).json({error: 'Passe os atributos corretamente.'});
    }

    listaDeCursos.push({
      titulo,
      descricao,
      professor
    })
    
    fs.writeFileSync('../models/cursos.json', JSON.stringify(listaDeCursos));

    res.status(201).json({message: 'Cadastro efetuado com sucesso!'});
  }
};

module.exports = cursoController;