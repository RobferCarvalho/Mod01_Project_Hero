/*
O Jokenpô é o popular jogo do "Pedra, papel e tesoura". A premissa é simples, você tem 3 elementos para escolher, e cada um deles vence de um, e perde para o outro.
Pedra ganha da tesoura, mas perde para o papel;
Tesoura ganha do papel, mas perde para a pedra;
Papel ganha da pedra, mas perde para a tesoura.
E para esse projeto você deve desenvolver um programa capaz de :
Receber o elemento escolhido pelo usuário;
Escolher um elemento aleatório para o computador;
Comparar os dois elementos e declarar um vencedor.
Você pode adaptar o jogo ao seu projeto criado anteriormente (por exemplo fazer um: "Espada, Escudo e Magia") para incrementar ainda mais o seu projeto. Apenas lembre-se de deixar claro para o usuário como funcionará o jogo nesse caso (quem ganha e quem perde de quem).

Permitir que eu decida quantas rodadas iremos fazer (1 ponto) ok
Ler a minha escolha: `pedra`, `papel` ou `tesoura` (2 pontos) ok
Decidir de forma aleatória a decisão do computador (2 pontos) ok
Mostrar quantas rodadas cada jogador ganhou (2 pontos)
Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador) (1,5 pontos)
Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de quantidade de rodadas, se não finalize o programa. (1,5 pontos)
*/


//em dev

var prompt = require('prompt-sync')();

let jogarDnv = ' ';

const pedra = 'PEDRA';
const papel = 'PAPEL';
const tesoura = 'TESOURA';
const listaJogo = [pedra, papel, tesoura];
let escolha = 0;


let win = 0;
let lost = 0;
let draw = 0;

do{
    escolha = +prompt(`Escolha quantas rodadas você deseja jogar: `);
    for(let cont = 0 ; cont < escolha ; ){
        
        console.log(`entrou aqui -nº do contador: ${cont}`);
        const escolha2 = prompt(`Escolha entre; Pedra, Papel ou Tesoura. `).toUpperCase();
        const eleRandom = listaJogo[Math.floor(Math.random() * listaJogo.length)];
        

        if(escolha2 === eleRandom) {
            console.log(`entrou aqui -1 /pedra == /papel == /tesoura ==`);
            console.log(`A sua escolha foi ${escolha2}. E a minha ${eleRandom}. Empatamos!!! `);
            cont++    
        }  
            else if(escolha2 === 'PEDRA' && eleRandom === 'TESOURA') {
                console.log(`entrou aqui -2 pedra e tesoura`);
                console.log(`A sua escolha foi ${escolha2}. E a minha ${eleRandom}. Você ganhou!!! `);
                cont++  
            }
                else if(escolha2 === 'TESOURA' && eleRandom === 'PEDRA') {
                    console.log(`entrou aqui -3 tesoura e pedra`);
                    console.log(`A sua escolha foi ${escolha2}. E a minha ${eleRandom}. Você perdeu!!! `);
                    cont++
                }
                    else if(escolha2 === 'TESOURA' && eleRandom === 'PAPEL') {
                        console.log(`entrou aqui -4 tesoura e papel`);
                        console.log(`A sua escolha foi ${escolha2}. E a minha ${eleRandom}. Você ganhou!!! `);  
                        cont++
                    }
                        else if(escolha2 === 'PAPEL' && eleRandom === 'TESOURA') {
                            console.log(`entrou aqui -5 papel e tesoura `);
                            console.log(`A sua escolha foi ${escolha2}. E a minha ${eleRandom}. Você perdeu!!! `);
                            cont++
                        }
                            else if(escolha2 === 'PAPEL' && eleRandom === 'PEDRA') {
                                console.log(`entrou aqui -6 papel e pedra `);
                                console.log(`A sua escolha foi ${escolha2}. E a minha ${eleRandom}. Você perdeu!!! `);
                                cont++
                            }
                                else if(escolha2 === 'PEDRA' && eleRandom === 'PAPEL') {
                                    console.log(`entrou aqui 7 pedra e papel`);
                                    console.log(`A sua escolha foi ${escolha2}. E a minha ${eleRandom}. Você perdeu!!! `);
                                    cont++
                                }

    
    }

    jogarDnv = prompt(`Deseja jogar novamente? S ou N. Se digita qualquer outra "coisa" o jogo encerrará `).toUpperCase();

}while(jogarDnv === "S");