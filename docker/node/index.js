const express = require('express')
const app = express()
const port = 3000
const params = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const database = mysql.createConnection(params)

const create = 'CREATE TABLE people (id int not null auto_increment,name varchar(100), primary key(id));'
database.query(create)

const insert = `INSERT INTO people(name) values('Igor Kleiner Says Hello to Wesley');`
database.query(insert)
// database.end()
const SELECT = `SELECT name from  people;`


app.get('/', (req, res) => {
    let con = mysql.createConnection(params)
    con.connect(function (err) {
        if (err) throw err;
        con.query(SELECT , function (err, result) {
            if (err) throw err;
            console.log(result[0].name);
            res.send('<h1>Full Cycle Rocks!</h1><br><br>' + result[0].name + '</h2>')
        });
    });
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})