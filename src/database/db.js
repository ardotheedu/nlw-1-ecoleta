// importar a dependencia do slqlite3
const sqlite3 = require("sqlite3").verbose()

// Criar objeto que ira fazer operação no banco de dados
const db = new sqlite3.Database("./src/database/database.db")
module.exports = db
// Utilizar o objeto do banco de daos, para nossas operações
db.serialize(() => {
    // com comandos SQL eu vou:

    // 1 criar um tabela 
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)
    // 2 inserir dados na tabela
    /*const query = `
        INSERT INTO places (
            image,
            name, 
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [

    ]

    function afterInsertData(err){
        if(err) {
            return console.log(err)
        }

        console.log("cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)

    // 3 consultar os dados da tabela
    db.all(`SELECT * FROM places`, function(err, rows){
        if(err) {
            return console.log(err)
        }

        console.log("Aqui estão seus registros")
        console.log(rows)
    }) 

    // 4 deletar um dado da tabela
    db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
        if(err) {
            return console.log(err)
        }

        console.log(err)
    }) */
})

     