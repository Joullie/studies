/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

let valorComb = 5
let gastoMedio = 20
let distKm = 100

let valorViagem = (distKm / gastoMedio) * valorComb

console.log(
  'O valor gasto para realizar sua viagem será de R$' + valorViagem.toFixed(2)
)

/*O toFixed(x) definirá quantas casas decimais serão mostradas junto ao resultado. No caso acima, 2.*/
