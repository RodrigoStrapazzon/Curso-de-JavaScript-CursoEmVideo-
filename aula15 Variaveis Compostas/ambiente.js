/* Variaveis compostas 
    - Vetores (Arrays)

num.push (valor) - adiciona um valor no final do vetor
num.length - retorna o tamanho do vetor
num.sort() - ordena o vetor

*/



let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log (`O valor está na posição ${pos}`)
}
