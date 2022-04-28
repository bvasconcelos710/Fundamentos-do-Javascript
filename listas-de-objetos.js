const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12345678912",
    email: "andre@gmail.com",
    telefone: ["123456789", "987654321"],
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/04"
    }]
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014")

console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)