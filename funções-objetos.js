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
    },
    {
        nome: "Samia Maria",
        parentesco: "filha",
        dataNasc: "04/01/2014"
    }
    ],
    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)