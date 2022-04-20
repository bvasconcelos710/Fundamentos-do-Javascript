// Dividindo array com slice()

const alunos = ['João', ' Juliana', ' Ana', ' Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = alunos.slice(0, alunos.length / 2);

const sala2 = alunos.slice(alunos.length / 2);

console.log(`A sala 1 é: ${sala1}`);
console.log(`A sala2 2 é: ${sala2}`);

// Alterando array com splice()

alunos.splice(1, 2, "Rodrigo");

console.log(alunos);

// Juntando arrays
const salasUnificadas = sala1.concat(sala2);

console.log(salasUnificadas);

// Listas de duas dimensões

const turma = ["João", "Juliana", "Caio", "Ana"];
const media = [10, 7, 9, 6];

let listaTurmaMedia = [turma, media];

console.log(`${listaTurmaMedia[0][0]}, sua nota é ${listaTurmaMedia[1][0]}`)