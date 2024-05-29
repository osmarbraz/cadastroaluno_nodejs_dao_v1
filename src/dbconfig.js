/**
 * Configurações e conexão com o banco de dados.
 */

// Import bibliotecas
const sqlite3 = require("sqlite3").verbose();

// Nome do arquivo do banco de dados
const filepath = "./database.db";

/**
 * Cria uma conexão com o banco de dados.
 * @returns 
 */
function createDbConnection() {
  //Cria a conexão com o banco de dados
  const db = new sqlite3.Database(filepath, (error) => {
    if (error) {
      return console.error(error.message);
    }
    /** Cria a tabela no banco de dados */
    createTable(db);
  });
  console.log("Conexão com SQLite foi estabelecida");
  return db;
}

/**
 * Cria a tabela de aluno se não existir.
 * 
 * @param {*} db 
 */
function createTable(db) {
    db.exec(`
    create table IF NOT EXISTS ALUNO (
            alunoId integer, 
            nome varchar(100), 
            curso varchar(50), 
            cpf varchar(11), 
            CONSTRAINT PK_ALUNO PRIMARY KEY (alunoId));
     `);
  }

  module.exports = createDbConnection();
  