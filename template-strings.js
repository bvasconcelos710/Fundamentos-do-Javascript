// 1ª forma
const nome = "Bruno";
const idade = 27;
const cidade = "Itaituba/PA";

const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " e a cidade em que nasci é " + cidade;

console.log(apresentacao);

// Utilizando template de strings

const apresentacao2 = `Meu nome é ${nome}, minha idade é ${idade} e a cidade em que nasci é ${cidade}.`

console.log(apresentacao2);