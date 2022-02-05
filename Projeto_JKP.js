/*
Projeto 2 - Jokenpô
O Jokenpô é o popular jogo do "Pedra, papel e tesoura". A premissa é simples, você tem 3 elementos para escolher, e cada um deles vence de um, e perde para o outro.
Pedra ganha da tesoura, mas perde para o papel;
Tesoura ganha do papel, mas perde para a pedra;
Papel ganha da pedra, mas perde para a tesoura.
E para esse projeto você deve desenvolver um programa capaz de :
Receber o elemento escolhido pelo usuário;
Escolher um elemento aleatório para o computador;
Comparar os dois elementos e declarar um vencedor.
Você pode adaptar o jogo ao seu projeto criado anteriormente (por exemplo fazer um: "Espada, Escudo e Magia") para incrementar ainda mais o seu projeto. Apenas lembre-se de deixar claro para o usuário como funcionará o jogo nesse caso (quem ganha e quem perde de quem).

                    Requisitos                    
Para esse projeto, os requisitos fundamentais serão:

1 Permitir que eu decida quantas rodadas iremos fazer;
2 Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
3 Decidir de forma aleatória a decisão do computador;
4 Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);
5 Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;
6 Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
7 Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
8 Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.
*/


var prompt = require('prompt-sync')();


/*Teste random
const jogo = ["Pedra", "Papel", "Tesoura"]
const randomElement = arr[Math.floor(Math.random() * arr.length)];

console.log(randomElement);
*/

const contador = 0
;

let rodadas = +prompt('Digite o numero de rodadas que deseja jogar: ');
let escolha = prompt('Escolha: Pedra, Papel ou Tesoura').toUpperCase();





    
















