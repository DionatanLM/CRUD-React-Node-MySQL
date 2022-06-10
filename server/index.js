const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'crud'
});

app.post('/create', (req, res) => {
    const codigo = req.body.codigo;
    const nome = req.body.nome;
    const primeiroNome = req.body.primeiroNome;
    const meioNome = req.body.meioNome;
    const ultimoNome = req.body.ultimoNome;
    const tratamento = req.body.tratamento;
    const apelido = req.body.apelido;
    const nascimento = req.body.nascimento;
    const sexo = req.body.sexo;
    const vip = req.body.vip;
    const presidente = req.body.presidente;
    const pessoaReferencia = req.body.pessoaReferencia;
    const cargo = req.body.cargo;
    const estadoCivil = req.body.estadoCivil;
    const ocupacao = req.body.ocupacao;
    const categoria = req.body.categoria;
    const escolaridade = req.body.escolaridade;
    const partido = req.body.partido;
    const observacao = req.body.observacao;
    

    db.query('INSERT INTO crudTable (codigo, nome, primeiroNome, meioNome, ultimoNome,  tratamento, apelido, nascimento, sexo, vip, presidente, pessoaReferencia, cargo, estadoCivil, ocupacao, categoria, escolaridade, partido, observacao) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
     [codigo, nome, primeiroNome, meioNome, ultimoNome,  tratamento, apelido, nascimento, sexo, vip, presidente, pessoaReferencia, cargo, estadoCivil, ocupacao, categoria, escolaridade, partido, observacao], 
     (err, result) => {
         if(err) {
             console.log(err);
         } else {
            res.send("Valores inseridos");
         }
      }
     );
});

app.get('/employees', (req, res) => {
    db.query("SELECT * FROM crudTable", (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.put('/update', (req, res) => {
    const codigo = req.body.codigo
    const nome = req.body.nome
    db.query("UPDATE crudtable SET nome = ? WHERE codigo = ?", [nome, codigo], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.delete('/delete/:codigo', (req, res) => {
    const codigo = req.params.codigo
    db.query("DELETE FROM crudtable WHERE codigo = ?", codigo, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, ()=>{
    console.log("Servidor rodando na porta 3001!");
})

