/**
 * Métodos de acesso aos dados de aluno no banco de dados.
 */

// Import das bibliotecas próprias
const AlunoDAO = require("./alunodao");

// Retorna uma lista com todos os alunos
const getLista = async (request, response) => {   
  
    //Cria o objeto DAO para acessar o banco de dados
    const dao = new AlunoDAO();

    const rows = await dao.getLista();
    
    response.status(200).json(rows);  
};

// Procura um aluno pelo id
const getAluno = async (request, response) => {
    const alunoId = parseInt(request.params.alunoId);
    
    //Cria o objeto DAO para acessar o banco de dados
    const dao = new AlunoDAO();

    const rows = await dao.getAluno(alunoId);
    
    response.status(200).json(rows);    
};

// Insere um novo aluno
const inserir = async (request, response) => {
    
    const { alunoId, nome, curso, cpf } = request.body ;  

    //Cria o objeto DAO para acessar o banco de dados
    const dao = new AlunoDAO();

    const { rows } = dao.inserir(alunoId, nome, curso, cpf);

    response.status(201).json({ message: `Aluno inserido com alunoId: ${alunoId}` })
};

// Altera um aluno pelo alunoId
const alterar = async (request, response) => {    
    const alunoId = parseInt(request.params.alunoId);
    const { nome, curso, cpf } = request.body;

    //Cria o objeto DAO para acessar o banco de dados
    const dao = new AlunoDAO();

    const rows = await dao.alterar(alunoId, nome, curso, cpf);

    response.status(200).json( { message: `Aluno alterado com alunoId: ${alunoId}` });
};
   

// Exclui um aluno pelo alunoId
const excluir = async (request, response) => {
    const alunoId = parseInt(request.params.alunoId);
    
    //Cria o objeto DAO para acessar o banco de dados
    const dao = new AlunoDAO();

    const rows = dao.excluir(alunoId);

    response.status(200).json( { message: `Aluno excluído com alunoId: ${alunoId}` });    
};

// Exporta as funções
module.exports = {
    getLista,
    getAluno: getAluno,
    inserir,
    alterar,
    excluir
};