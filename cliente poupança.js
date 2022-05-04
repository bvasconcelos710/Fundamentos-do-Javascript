function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.salddo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor;
    }


}

function clientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this.nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup;

}
const ju = new clientePoupanca("Ju", "12345898411", "ju@gagag", 100, 200);

console.log(ju);

clientePoupanca.prototype.depositarPoup = function (valor) {
    this.saldoPoup += valor
}

ju.depositarPoup(30)
console.log(ju.saldoPoup)