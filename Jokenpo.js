const prompt = require('prompt-sync')();

/*declaração das variaveis*/
let jogarDnv = ' ';
const nome = prompt(`Se quiser digite seu nome.  -  Qual seu nome? `);
console.log();

const pedra = 'PEDRA';
const papel = 'PAPEL';
const tesoura = 'TESOURA';
const listaJogo = [pedra, papel, tesoura];

let escolha = 0;
let win = 0;
let lost = 0;
let draw = 0;
let rodadas = 0;

do{  /*laço de repetição minima*/
const escolha = +prompt(`${nome} - Escolha quantas rodadas você deseja jogar: `);
    

    for(let cont = 0 ; cont < escolha ; ){      /* laço de escolha condicionada do PC*/
        const escolha2 = prompt(`${nome} - Escolha entre; Pedra, Papel ou Tesoura. `).toUpperCase();
        const eleRandom = listaJogo[Math.floor(Math.random() * listaJogo.length)];
        console.log();
        rodadas++
        
         /* exclusivos e classificação */       
        if(escolha2 === eleRandom) {    /* 1 - Empate*/
            console.log(`A sua escolha foi ${escolha2}. E a minha ${eleRandom}. Empatamos!!! `);
            console.log();
            cont++  
            draw++  
        }  
            else if(escolha2 === 'PEDRA' && eleRandom === 'TESOURA') {   /*2 -Pedra vence*/
                console.log(`A sua escolha foi ${escolha2}. E a minha ${eleRandom}. Você venceu!!! `);
                console.log();
                cont++
                win++
            }
                else if(escolha2 === 'PEDRA' && eleRandom === 'PAPEL') {     /*3 - Pedra perde*/
                    console.log(`A sua escolha foi ${escolha2}. E a minha ${eleRandom}. Você perdeu!!! `);
                    console.log();
                    cont++
                    lost++
                }
                    else if(escolha2 === 'TESOURA' && eleRandom === 'PAPEL') {   /*4 - Tesoura vence*/
                        console.log(`A sua escolha foi ${escolha2}. E a minha ${eleRandom}. Você venceu!!! `);
                        console.log();  
                        cont++
                        win++
                    }
                        else if(escolha2 === 'TESOURA' && eleRandom === 'PEDRA') {    /*5 - Tesoura perde*/
                            console.log(`A sua escolha foi ${escolha2}. E a minha ${eleRandom}. Você perdeu!!! `);
                            console.log();
                            cont++
                            lost++
                        }
                            else if(escolha2 === 'PAPEL' && eleRandom === 'TESOURA') {   /*6 - Papel perde*/
                                console.log(`A sua escolha foi ${escolha2}. E a minha ${eleRandom}. Você perdeu!!! `);
                                console.log();
                                cont++
                                lost++
                            }
                                else if(escolha2 === 'PAPEL' && eleRandom === 'PEDRA') {    /*7 - Papel vence*/
                                    console.log(`A sua escolha foi ${escolha2}. E a minha ${eleRandom}. Você venceu!!! `);
                                    console.log();
                                    cont++
                                    win++
                                }
    }

console.log(`Rodada: ${rodadas}º...`);  /* numero de rodadas ja realizadas */  

let restParcial = win-lost ;    /*verificação de pontuação*/
    
    /*classificando e exibindo resultados parciais*/
    if(restParcial > 0){  
        console.log(`${nome} - Você tem ${restParcial} vitoria(s) a mais que "eu"`);
        console.log();
    }else if(restParcial < 0){
        let restParcial2 = restParcial * -1;
        console.log(`${nome} - "Eu tenho" ${restParcial2} vitoria(s) a mais que você.`);
        console.log();
    }else if(draw === 0 && win === 0 && lost === 0){
        console.log(`Não houve disputa!`);
        console.log();
    }else{
        console.log(`${nome} - Estamos empatados com ${win} vitoria(s) cada.`);
        console.log();
    }
    console.log(` - Resultado parcial: `);
    console.log(`${nome} - Vitórias ${win}. `);
    console.log(`${nome} - Derrotas ${lost}. `);
    console.log(`${nome} - Empates ${draw}. `);
    console.log();
    
    jogarDnv = prompt(`${nome} - Deseja jogar novamente? Se sim, digite "S" ou se digitar qualquer outra "coisa" o jogo encerrará! `).toUpperCase();
    console.log();
}while(jogarDnv === "S");

console.log(`Rodadas jogadas: ${rodadas}`);
console.log();

let result = win-lost;      /*verificação de pontuação*/
        if(result > 0){
            console.log(`${nome} - Você venceu de ${win} a ${lost}."`);
            console.log(`${nome} - Você venceu ${result} à mais que eu`);
            console.log();

        }else if(result < 0){
            let result2 = result * -1;
            console.log(`${nome} - Você perdeu por ${lost} a ${win}.`);
            console.log(`${nome} - Você venceu ${result2} à mais que eu`);
            console.log();
            
        }else if(draw === 0 && win === 0 && lost === 0){
            console.log(`Não há vencedores.`);
            console.log();

        }else{
            console.log(`${nome} - Empatamos com ${win} vitoria(s) cada.`);
            console.log();
        }
/* FIM */
console.log(`- Resultado final: `);
console.log(`${nome} - Vitórias ${win} `);
console.log(`${nome} - Derrotas ${lost}. `);
console.log(`${nome} - Empates ${draw}. `);
