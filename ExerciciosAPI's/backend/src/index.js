const express = require('express');
const app = express();
app.use(express.json());
 
app.get('/dadospessoais', (req, res) => {
    res.send({nome: 'Pedro Humberto',
    idade : 19,
    email: "pedrohumbertoo@hotmail.com"});
});
 
app.get('/formacao', (req, res) => {
    res.send( { formacao: "Cursando Analise de desenvolvimento de Sistemas",              
    } );
});

app.get('/projetos', (req, res) => {
    res.send( { projetos: "https://github.com/PedroHum",            
    } );
});

app.get('/experiencia', (req, res) => {
    res.send( { experiencia: "react, frameworks, front-end...",
    } );
});

app.get('/lazer', (req, res) => {
    res.send( { lazer: "Jogos online, assistir séries e vôlei de praia",
    } );
});


app.post('/cliente', (req, res) => {
    const {nome} = req.body;
    res.send("Cliente " + nome + " foi recebido com sucesso!");
    const {telefone} = req.body;
    res.send("Telefone " + telefone + " foi recebido com sucesso!");
    const {idade} = req.body;
    res.send("Cliente com " + idade + "anos foi recebido com sucesso!");
    const {profissao} = req.body;
    res.send("Cliente " + profissao + " foi recebido com sucesso!");
    const {email} = req.body;
    res.send("Email " + email + " foi recebido com sucesso!");
});
 
app.put('/cliente/:id', (req, res) => {
    const {id} = req.params;
    res.send('O parâmetro de rota enviado foi: ' + id);
    res.send("Cliente " + nome + " foi atualizado com sucesso!");
    const {telefone} = req.body;
    res.send("Telefone " + telefone + " foi atualizado com sucesso!");
    const {idade} = req.body;
    res.send("Cliente com " + idade + "anos foi atualizado com sucesso!");
    const {profissao} = req.body;
    res.send("Cliente " + profissao + " foi atualizado com sucesso!");
    const {email} = req.body;
    res.send("Email " + email + " foi atualizado com sucesso!");

})


app.delete('/cliente/:id', (req, res) => {
    const {id} = req.params;
    res.send("Cliente ID " + id + " foi excluído com sucesso!");
});
 
 
app.listen(3333, () => {
    console.log("Servidor Backend ON!");
});
