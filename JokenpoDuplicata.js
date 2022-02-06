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
Mostrar quantas rodadas cada jogador ganhou (2 pontos) ok
Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador) (1,5 pontos)
Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de quantidade de rodadas, se não finalize o programa. (1,5 pontos) ok
*/


//concluído

var prompt = require('prompt-sync')();

let jogarDnv = ' ';
let nome = prompt(`Se quiser digite seu nome.\nQual seu nome? `);
console.log();
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
        console.log();
        console.log(`entrou aqui => nº do contador: ${cont}`);
        console.log();
        const escolha2 = prompt(`Escolha entre; Pedra, Papel ou Tesoura. `).toUpperCase();
        console.log();
        const eleRandom = listaJogo[Math.floor(Math.random() * listaJogo.length)];
                
        if(escolha2 === eleRandom) {  // 1 - Empate
            console.log(`entrou aqui -> 1 /pedra == /papel == /tesoura ==`);
            console.log();
            console.log(`A sua escolha foi ${escolha2}. E a minha ${eleRandom}. Empatamos!!! `);
            cont++  
            draw++  
        }  
            else if(escolha2 === 'PEDRA' && eleRandom === 'TESOURA') {  //2 -Pedra vence
                console.log(`entrou aqui -> 2 pedra e tesoura`);
                console.log();
                console.log(`A sua escolha foi ${escolha2}. E a minha ${eleRandom}. Você venceu!!! `);
                cont++
                win++
            }
                else if(escolha2 === 'PEDRA' && eleRandom === 'PAPEL') {  //3 - Pedra perde
                    console.log(`entrou aqui -> 3 pedra e papel`);
                    console.log();
                    console.log(`A sua escolha foi ${escolha2}. E a minha ${eleRandom}. Você perdeu!!! `);
                    cont++
                    lost++
                }
                    else if(escolha2 === 'TESOURA' && eleRandom === 'PAPEL') {  //4 - Tesoura vence
                        console.log(`entrou aqui -> 4 tesoura e papel`);
                        console.log();
                        console.log(`A sua escolha foi ${escolha2}. E a minha ${eleRandom}. Você venceu!!! `);  
                        cont++
                        win++
                    }
                        else if(escolha2 === 'TESOURA' && eleRandom === 'PEDRA') {  //5 - Tesoura perde
                            console.log(`entrou aqui -> 5 tesoura e pedra `);
                            console.log();
                            console.log(`A sua escolha foi ${escolha2}. E a minha ${eleRandom}. Você perdeu!!! `);
                            cont++
                            lost++
                        }
                            else if(escolha2 === 'PAPEL' && eleRandom === 'TESOURA') {  //6 - Papel perde
                                console.log(`entrou aqui -> 6 papel e tesoura `);
                                console.log();
                                console.log(`A sua escolha foi ${escolha2}. E a minha ${eleRandom}. Você perdeu!!! `);
                                cont++
                                lost++
                            }
                                else if(escolha2 === 'PAPEL' && eleRandom === 'PEDRA') { //7 - Papel vence
                                    console.log(`entrou aqui -> 7 papel e pedra `);
                                    console.log();
                                    console.log(`A sua escolha foi ${escolha2}. E a minha ${eleRandom}. Você venceu!!! `);
                                    cont++
                                    win++
                                }
        }
    let restParcial = win-lost ;
        if(restParcial > 0){
            console.log();
            console.log(`${restParcial} vitoria(s) a mais que "eu"`);
            console.log();
        }else if(restParcial < 0){
            console.log();
            let restParcial2 = restParcial * -1;
            console.log(`"Eu tenho ${restParcial2} vitoria(s) a mais que ${nome}.`);
            console.log();
        }else if(draw === 0 && win === 0 && lost === 0){
            console.log();
            console.log(`Não houve disputa!`);
            console.log();
        }else{
            console.log(`estamos empatados com ${win} vitoria para cada.`);
        }
    console.log(`Seu resultado parcial:\nVitorias ${win} \nDerrotas ${lost} \nEmpates ${draw}.`);
    console.log("v e d");
    console.log(win);
    console.log(lost);
    
    jogarDnv = prompt(`Deseja jogar novamente? S ou N. Se digitar qualquer outra "coisa" o jogo encerrará! `).toUpperCase();
    console.log();

}while(jogarDnv === "S");
console.log();


let restParcial = win-lost;
        if(restParcial > 0){
            console.log();
            console.log(`${restParcial} vitorias a mais que "eu"`);

        }else if(restParcial < 0){
            console.log();
            let restParcial2 = restParcial * -1;
            console.log(`${restParcial2} derrotas a mais que "eu"`);
            console.log(restParcial2);

        }else if(draw === 0 && win === 0 && lost === 0){
            console.log();
            console.log(`Não há vencedores.`);
        }

console.log();
console.log(`Seu resultado final:\nVitorias ${win} \nDerrotas ${lost} \nEmpates ${draw}.`);
console.log();
console.log(`${nome}`);