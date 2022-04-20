// notas dos alunos

// let nota1 = 10;
//  let nota2 = 6.5;
// let nota3 = 8;
// let nota4 = 7.5;


// calculando a média

const notas = [10, 6.5, 8, 7.5];

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);

// adicionando elemento 

notas.push(7);

console.log(notas);

// removendo elementos

notas.pop();
console.log(notas);

// utilizando for

for (let i = 0; i < notas.length; i++) {
    let total = 0;
    total = total + notas[i];
    if (i === notas.length - 1) {
        let mediaFor = total / notas.length;
        console.log(mediaFor);
    }

}


