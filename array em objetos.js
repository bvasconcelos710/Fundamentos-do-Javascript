// acessando telefones em uma lista de um objeto
const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12345678912",
    email: "andre@gmail.com",
    telefone: ["123456789", "987654321"]
}

cliente.telefone.forEach(fone => console.log(fone));