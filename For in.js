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
relatorio = "";
for (let info in cliente) {
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    }
    else {
        relatorio += `${info} ==> ${cliente[info]}, `
    }

}

console.log(relatorio);