// Criando objeto
const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12345678912",
    email: "andre@gmail.com"
}

// imprimindo informações

console.log(`meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`)

console.log(`os três primeiros números do meu CPF são: ${cliente.cpf.substring(0, 3)}`)

// acessando através de lista

const chaves = ["nome", "idade", "cpf", "email"];

console.log(cliente[chaves[0]])

// utilizando forEach()

chaves.forEach(info => console.log(cliente[info]))

// alterando e adicionando novos campos no objeto

cliente.fone = "987456321";
cliente.idade = "37"

console.log(cliente);

// deletando um campo

delete cliente.email;