const prompt = require("prompt-sync")();
const cicloDia = ['manhã', 'tarde', 'noite'];
const periodoMan = [manha]; //Momentos do dia da história
const periodoTar = [tarde];
const periodoNoi = [noite];

const moeda = [ouro, prata, bronze, cobre, raridades];
let ouro = 0;
let prata = 0;
let bronze = 0;
let cobre = 0;
let rar = 0;

const energia = [];
const sede = [];
const fome = [];
const vigor = [];
const atençao = [];
const vida = [];

const manha = ['4:30', '5', '5:30', '6' , '6:30', '7','7:30', '8', '8:30', '9', '9:30', '10', '10:30', '11', '11:30', '12'];
const tarde = ['12:30', '13', '13:30', '14', '14:30', '15', '15:30', '16', '16:30', '17', '17:30', '18', '18:30', '19'] 
const noite = ['19:30', '20', '20:30', '21', '21:30', '22', '22:30', '23', '23:30', '00', '00:30', '1','1:30', '2', '2:30', '3', '3:30', '4'];

const titulos = ['realeza', 'plebeu', 'coletor', 'fazendeiro', 'caçador', 'chefe', 'alto', 'sumo', 'baixo'];
const profissão = ['ferreiro', 'alquimia', 'herbalismo', 'medico', 'cozinheiro', 'joalheiro', 'minerador'];

const mochila = [armadura, armas, moeda, itens];

const armas = [armaLonga, armaCurta, armaRanged];
const armadura = ['cabeça', 'ombros', 'peitoral', 'luvas', 'cinto', 'calça', 'sapato']; 
const amuleto = ['anel', 'cordão', 'brinco'];
const armaLonga = ['espada', 'lança', 'maça', 'machado', 'martelo', 'bastão'];
const armaCurta = ['espada', 'adaga', 'faca serimonial', 'punhal', 'glave'];
const armaRanged = ['arco', 'besta', 'cajado', 'facas de arremeço'];

const sttsVital = [vida, energia, fome, sede, vigor, atençao, humor];

const status1 = [];  //stts para fome, vida, sede e atenção
status1[0] = "excelente";
status1[1] = "bom";
status1[2] = "medio";
status1[3] = "baixo";
status1[4] = "pessimo";

const status2 = []; //stts para vigor e energia
status2[0] = "ileso";
status2[1] = "machucado";
status2[2] = "contundido";
status2[3] = "sangrando";
status2[4] = "gravemente ferido"

const status3 = [];  //stts para humor
humor[0] = "Bom";
humor[1] = "Mau";
humor[2] = "Normal";
humor[3] = "Estressado";
humor[4] = "Excelente";

const bruxo = {
    nome : `José`,
    idade: 20,
}


console.log(`'Bruxo' conseguiu entender seu ultimo feito e agora passa por uma fase nova ao qual jamais havia vivido; uma era de paz e tranquilidade. 
Na qual tentará viver uma vida "normal" ou menos "perturbada".

Nessa aventura, Crowster será interpretado por você e todas as ações escolhidas por você usuario.

Bruxo apos salvar o mundo, volta para sua antiga vila para ajudar na reconstrução total, ele se sentia culpado e preferiu ajeitar as coisas.
Conseguiu uma barraca modesta perto da entrada da vila para que conseguisse ver e ouvir os perigos possiveis chegando antes de todos e ao 
mesmo tempo estar pronto para o dia de trabalho antes de todos. Sua rotina começa as 4:30h da manhã, indo até as 19:20h da tarde e não para 
nem aos domingos. de 19:30h até o dia seguinte ele se resguarda para seus afazeres domesticos, treinamentos de magia e combate, lazer e outras coisas que 
desejar fazer, lembrando que deverá dormir pelo menos 5h por dia.

Neste ponto você passa a controlar 'bruxo', decidindo suas proximas ações atravéz de escolhas onde a cada decisão tomada, mudará seu final. Você precisará
fazer escolhas que vão fazer o tempo passar, dependendo de cada tarefa o tempo passará mais rapido ou mais devagar, sendo que cada minima terefa gastará 30min
e o maximo 5h, sendo que será impossivel desfazer uma ação depois de executada, levando a proxima escolha até que o jogo tenha um fim ou você conclusa seus objetivos
principais. Caso prefira não usar seu nome, o nome do personagem será por padrão Crowster. 

Principais objetivo:
1- Ajudar na reconstrução da vila.
2- Tornar-se um bruxo Especialista ou Master.
3- Dominar Alquimia e Herbalismo.
4- Dominar um dos quatro elementos(água, terra, fogo, vento).

Objetivos secundarios:
1- Aprender uma nova profissão.
2- Receba um titulo.
3- Consiga ao menos um item especial ou exclusivo.
4- Ache um amuleto de poder(anel, cordão ou brinco).
5- Mate ou cace uma criatura Alfa.
6- Ajude alguém.
7- Converse com o sabio.
8- Torne-se guardião.   `);

const nome = prompt(`Digite seu nome ou deixe em branco para padrão`);
if (nome = void()){
    console.log('nome padrão escolhido');
}else{
    console.log(`${nome} será o nome do bruxo.`);
    const nome = 'Crowster';  //será alterado depois
}
const nome = prompt("Digite seu nome para iniciar: "); //Jogador colocará seu nome para haver um rappot entre o jogo e o jogador

console.log(``);

console.log(`${nome}, acorda às 4:30h todo dia, toma um banho, arruma suas coisas para o dia de trabalho, toma café e sai para seus afazeres.
Ao sair pela porta de casa olha para o céu e admiria por uns instantes o amanhecer, havia muito tempo que não fazia isso em paz, mesmo assim 
da uma olhada aos arredores do portão principal da vila para garantir que não há ameaças proximas e segue para:`);
let escolha = prompt(`Qual lugar você quer ir primeiro? Para ir a: 1-Centro da vila / 2-Os muros / 3-Torres de vigia / 4-Docas / 5-Taberna. `);



if(escolha === 1){

}else if(escolha === 2){

}else if(escolha === 3){

}else if(escolha === 4){

}else if(escolha === 5){

}else{
    console.log();
}


if(escolha === 1){

}else if(escolha === 2){

}else if(escolha === 3){

}else if(escolha === 4){

}else if(escolha === 5){

}else{
    console.log();
}




if(escolha === 1){

}else if(escolha === 2){

}else if(escolha === 3){

}else if(escolha === 4){

}else if(escolha === 5){

}else{
    console.log();
}




if(escolha === 1){

}else if(escolha === 2){

}else if(escolha === 3){

}else if(escolha === 4){

}else if(escolha === 5){

}else{
    console.log();
}




if(escolha === 1){

}else if(escolha === 2){

}else if(escolha === 3){

}else if(escolha === 4){

}else if(escolha === 5){

}else{
    console.log();
}




if(escolha === 1){

}else if(escolha === 2){

}else if(escolha === 3){

}else if(escolha === 4){

}else if(escolha === 5){

}else{
    for(escolha < 0 ; escolha > 5 ; escolha != Number){
        console.log(`${escolha} não é valida, digite o numero correspondente, por favor.`);
}
}


/*
nivel(inicio) dos pers.:(ajudante, estudando, aprendiz)
nivel(normal): denominação de cada um
nivel(expert):(aperfeiçoado, disciplinado, dominador, mestre prof)
nivel(unico):(Especialista, Master)
obs: sabio e guardião não possuem nivel pois são de posições muito singulares e unicas, e apenas ladrões, assassinos e hunters podem obter os niveis de
mercenário*/



/*niveis dos itens:([comum, basico, essencial,] [exclusivo, raro, ultra raro,] [epico, especial,] exclusivo.);
itens/armas exclusivas são feitas por ferreiros ou joalheiros*/







function momentoAleatorio() {
  const randompro4 = Math.floor(Math.random() * periodo.length);

  const momentoInicial = periodo[randompro4];
  return momentoInicial;
}