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
