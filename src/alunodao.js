/**
 * Classe de acesso a dados de alunos.
 */

// Import das bibliotecas
const DAO = require("./dao");

// Define a classe AlunoDAO 
class AlunoDAO extends DAO {

    /**
     * Retorna uma lista com todos os alunos.
     * 
     * @returns uma lista.
     */
    getLista() {
        const sql = 'SELECT * FROM aluno';
        const params = [];

        return this.all(sql, params);
      }

    /**
     * Retorna um aluno pelo id.
     * 
     * @param {*} alunoId O id do aluno.
     * @returns Os dados do aluno.
     */
    getAluno(alunoId){
        const sql = 'SELECT * FROM aluno WHERE alunoId = ?';
        const params = [alunoId];

        return this.each(sql, params);
    }

    /**
     * Insere um novo aluno.
     * 
     * @param {*} alunoId O id do aluno.
     * @param {*} nome O nome do aluno.
     * @param {*} curso O curso do aluno.
     * @param {*} cpf O cpf do aluno.
     * @returns 
     */
    inserir(alunoId, nome, curso, cpf){
        const sql = 'INSERT INTO aluno (alunoId, nome, curso, cpf) VALUES (?, ?, ?, ?)';
        const params =  [alunoId, nome, curso, cpf];

        return this.run(sql, params);
    }

    /**
     * Altera os dados de um aluno pelo id.
     * 
     * @param {*} alunoId O id do aluno.
     * @param {*} nome O nome do aluno.
     * @param {*} curso O curso do aluno.
     * @param {*} cpf O cpf do aluno.
     * @returns 
     */
    alterar(alunoId, nome, curso, cpf){
        const sql = 'UPDATE aluno SET nome = ?, curso = ?, cpf = ? WHERE alunoId = ?';
        const params = [nome, curso, cpf, alunoId];

        return this.run(sql, params);
    }

    /**
     * Exclui um aluno pelo id.
     * 
     * @param {*} alunoId O id do aluno.
     * @returns 
     */
    excluir(alunoId){        
        const sql = 'DELETE FROM aluno WHERE alunoId = ?';
        const params = [alunoId];

        return this.run(sql, params);
    }
}

// Exporta o modelo
module.exports = AlunoDAO;