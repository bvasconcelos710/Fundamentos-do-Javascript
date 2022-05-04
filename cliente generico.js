function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.salddo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor;
    }


}

const andre = new Cliente("André", "123456789", "andre@gagaga", 100);

console.log(andre);