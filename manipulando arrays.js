// Dividindo array com slice()

const alunos = ['João', ' Juliana', ' Ana', ' Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = alunos.slice(0, alunos.length / 2);

const sala2 = alunos.slice(alunos.length / 2);

console.log(`A sala 1 é: ${sala1}`);
console.log(`A sala2 2 é: ${sala2}`);

// Alterando array com splice()

alunos.splice(1, 2, "Rodrigo");

console.log(alunos);