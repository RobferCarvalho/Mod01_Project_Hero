var prompt = require(  'prompt-sync')();

const escolhaSim = 'sim';
const escolhaNao = 'nao';
var ranq = 0;

const nome = prompt('Digite seu nome; ');

console.log('                           O Final da Jornada de um Bruxo e suas Escolhas');

console.log('                               \n*Instruções antes de Começar;\n\nResponda apenas com "sim" ou "nao".\nPara facilitar, se coloque no lugar do personagem Crowster, o Bruxo.\nLeia cada trecho atentamente antes de responder, pois cada decisão influencia no final da historia!\nBoa sorte na sua jornada final!');



console.log('\nCrowster, um bruxo que acordou à meia noite de terça-feira, uma noite clara e imensamente iluminada pela lua, olhou ao redor e percebeu algo diferente em sua realidade. \nTudo estava muito calmo e sereno como de costume e desconfiado, sentou-se para meditar espiritualmente e tentar entender o que se passava e por que tudo estava tão calmo e tranquilo.\nAo sair de seu corpo carnal pôde perceber uma presença estranha nas montanhas próximo ao lago, onde encontrava-se uma presença perturbada e calma, continha luz e escuridão em \nsua aura, era azul e vermelho ao mesmo tempo, como se pudéssemos sentir o bem e o mau num mesmo instante em um mesmo lugar habitando uma única pessoa.\nEntendeu então que se tratava do equilíbrio, mas não entendeu o porquê do equilíbrio se manifestar em forma espiritual.\nSua curiosidade e seu instinto alerta lhe sugeriam que algo estava errado, não com aquela figura misteriosa, mas ao todo e decidiu investigar.\nChegando ao local exato onde presença estava, Crow perguntou o que uma manifestação daquelas poderia estar fazendo por aquelas redondezas e a resposta foi;\n\nManifestação do Equilibro  -- "Acho que sabe muito bem o porquê e por quem estou aqui, Crow!"\nCrowster -- "Na verdade estou confuso..."\nManifestação do Equilibro  -- "Não é confusão o que você sente, é curiosidade!"\nCrowster -- "É, estou curioso sobre o que e quem você é, ou quem você representa!?"\nManifestação do Equilibro  -- "Você não quer saber sobre mim. Você quer saber sobre você e suas ações. Se seu esforço foi suficiente, se tomou as decisões certas, senão fora injusto. Mas devo lhe perguntar;');
var escolha = prompt('Você, ao prender a escuridão acha que foi sensato deixar a luz livre?  ').toLowerCase();
    
/*1º laço de repetição*/
while(escolha != escolhaNao && escolha != escolhaSim){
    console.log('\nInvalido, são decisões acertivas; sim ou nao?');
    escolha = prompt('Você, ao prender a escuridão acha que foi sensato deixar a luz livre?  ').toLowerCase();
        
}
    if(escolha == escolhaSim){
        console.log('\nCrowster -- "Se eu deixasse a escuridão por aí, ela acabaria arrumando mais confusão, eu não podia correr esse risco de novo"\nManifestação do Equilibro  -- "Entendo, mas algumas coisas não podem ser inibidas, elas precisam ser quem são, cumprir seu papel no ciclo da vida e da morte"\nCrowster -- "Nem sempre acertamos em tudo, mas fiz o meu melhor!"\nManifestação do Equilibro  -- "Sim, sua justiça foi reconhecida, sua determinação vista e sua lealdade com seu povo admirada. Não se prenda a detalhes, masssss...');
        
            
    }  
        else{
            console.log('\nCrowster -- "Eu fiz de errado?"\nManifestação do Equilibro  -- "Para o equilibrio não existe certo ou errado, apenas o que é, o que não é, e, o que poderia ser. Apenas avalio as ações de heróis como você"\nCrowster -- "Não sou um herói! Fiz apenas o que qualquer um com minhas habilidades faria!');
            
        }
    
if(escolha == escolhaSim){
    ranq = (ranq + 2);
}   
    else{
        ranq = (ranq + 1);
    }

escolha = prompt('Manifestação do Equilibro -- "Então basta ter força e poder, aliados à muito treino e dedicação para fazer o bem?" ').toLowerCase();

/*2º laço de repetição */
while(escolha != escolhaNao && escolha != escolhaSim){
    console.log('Invalido, são decisões acertivas; sim ou nao');
    escolha = prompt('Manifestação do Equilibro -- "Você acha que basta ter força e poder, aliados à muito treino e dedicação para fazer o bem?" ').toLowerCase();
}        
    if(escolha == escolhaSim){
        console.log('\nCrowster -- "Talvez, com mais pessoas com as minhas habilidades o mundo seria um lugar mais justo e tranquilo."\nManifestação do Equilibro – "Errado, Crow! As pessoas são o que são ou o que querem ser, não é preciso força e poder, apenas determinação e dedicação!"\nCrowster -- "Vi pessoas determinadas e dedicadas, de coração puro, deixarem esse mundo pelas mãos de pessoas cruéis, frívolas, corruptas. Sem chance de defesa ou qualquer tipo de justiça."\nManifestação do Equilibro -- "O mundo sempre foi assim e sempre será, como eu já te disse; há coisas que não podemos alterar. Elas devem seguir seu papel no ciclo da vida."\nCrowster -- "Eu nunca quis ser o que sou, mas olha pra mim!"\nManifestação do Equilibro -- "Ninguém, além de você, fez de você o que você é!"');
    }
        else{
            console.log('\nManifestação do Equilibro -- "Algumas pessoas acham que podem mudar, enquanto outras pensam que não. Também existem as que não se importam. A diferença entre elas é no que acreditam."\nCrowster – "Não acredito em mim. Não sou um exemplo a ser seguido, sou alguém que não se orgulha do passado. E acho pouco o que fiz pela terra e para as pessoas, ainda tenho muito o que pagar!"\nManifestação do Equilibro -- "Você pode falar o que quiser, no final o que conta é no que acredita!" ');
        }

if(escolha == escolhaSim){
    ranq = (ranq + 2);
}   
    else{
        ranq = (ranq + 1);
    } 

console.log('\nPor um momento Crow apenas refletia diante daquela aura, se distanciando daquele momento vagando pelos próprios pensamentos. Teve uma breve visão de como seria o mundo se ele não intervisse, todas as pessoas que salvou e tudo que fez pela terra estariam em escombros e poeira, o mundo teria sido destruído para depois se refazer. As pessoas seriam minoria \nmáxima de vida na terra, mas por mais cataclísmica seja qualquer guerra, a terra sempre será terra. O Homem se vai, mas a terra fica.\nNessa breve reflexão surgiu uma dúvida, e perguntou;');

escolha = prompt('Crowster -- "O que teria acontecido se eu tivesse morrido antes de concluir o encantamento do portal?" "Manifestação-- "Você concluiu o encantamento?" ');

/*3º laço de repetição caso */
while(escolha != escolhaNao && escolha != escolhaSim){
    console.log('\nInvalido, são decisões acertivas; sim ou nao');
    escolha = prompt('Manifestação do Equilibro  -- "Você concluiu o encantamento? " ').toLowerCase();
}        
    if(escolha == escolhaSim){
            console.log('\nManifestação do Equilibro  -- "Sua habilidade com encantamentos melhorou muito nos últimos tempos. Deve se orgulhar, são feitos que entram para história e todos irão te adorar e idolatrar!”\nCrowster -- "Não fiz para ter fama ou ser ídolo de alguém...fiz porque era o certo a ser feito!"\nManifestação do Equilibro  -- "Seu senso de humor nada mudou."');
    }
        else{
            console.log('\nManifestação do Equilibro  -- "Algumas pessoas acham que podem mudar, enquanto outras pensam que não. Também existem as que não se importam. A diferença entre elas é no que acreditam.”\nCrowster – "Não acredito em mim. Não sou um exemplo a ser seguido, sou alguém que não se orgulha do passado. E acho pouco o que fiz pela terra e para as pessoas, ainda tenho que pagar muito!”\nManifestação do Equilibro  -- "Porém, bruxo, o que deveria ser feito foi feito, as vezes pensamos que as coisas não foram como planejadas, mas são como são...');
        }
if(escolha == escolhaSim){
    ranq = (ranq + 1);
}   
    else{
        ranq = (ranq + 2);
    }
escolha = prompt('Manifestação do Equilibro  -- "O feitiço utilizado por acaso foiii...  ...fogo?" ').toLowerCase();


/*4º laço de repetição */
while(escolha != escolhaNao && escolha != escolhaSim){
    console.log('\nInvalido, são decisões acertivas; sim ou nao');
    escolha = prompt('Manifestação do Equilibro  -- "O feitiço utilizado por acaso foi......fogo?" ').toLowerCase();
}       
    if(escolha == escolhaSim){
        console.log('\nManifestação do Equilibro  -- "Hummm... Espada e fogo é uma bela combinação. Mas teria sido mais prático usar apenas o fogo. Você não teria feito tanto esforço, muito menos teria que entrar em luta corporal com um dos magos mais habilidosos já existentes.”\nCrowster -- “Se você sabe tudo, por que as perguntas? É algum tipo de teste? O que espera conseguir?”\nManifestação do Equilibro  -- “Não sei de tudo, apenas o que me conta... :) ...brincadeira não é meu forte. Realmente sei de tudo... tudo aquilo que tenho ligação”');
    }
        else{
        console.log('\nCrowster -- “Não! utilizei um feitiço com a espada.”\nHummm... Espada e fogo é uma bela combinação. Mas teria sido mais prático usar apenas o fogo. Você não teria feito tanto esforço, muito menos teria que entrar em luta corporal com um dos magos mais habilidosos já existentes.”\nCrowster -- “Se você sabe tudo, por que as perguntas? É algum tipo de teste? O que espera conseguir?”\nManifestação do Equilibro  -- “Não sei de tudo, apenas o que me conta... :) ...brincadeira não é meu forte. Realmente sei de tudo... tudo aquilo que tenho ligação”');
        }
if(escolha == escolhaSim){
    ranq = (ranq + 1);
}   
    else{
        ranq = (ranq + 2);
    }

console.log('\nCrowster -- "Como assim? Estamos ligados? Mas como? Quando aconteceu?\nManifestação do Equilibro  -- "Estamos e não estamos conectados, é complicado explicar. Digamos que não aconteceu, mas sempre foi. Eu como equilíbrio tenho que estar conectado com tudo e todos, assim como a vida e a morte estão ligadas a tudo, eu também estou. Ninguém pode nos evitar!" \nCrowster -- "Se sempre estivemos conectados, por que não me ajudou com todo esse seu poder? Você poderia ter impedido que tudo acontecesse e mesmo assim deixou acontecer. \nManifestação do Equilibro  -- "Você talvez não compreenda, essa não é sua natureza nem sua essência, entender tudo no universo é nosso dever, não dos seres como você.” \nCrowster -- "Então tenho que aceitar tudo que vier?!\nManifestação do Equilibro  -- "Não, pelo contrário, você pode fazer seu caminho como desejar, mas apenas com as pedras que lhe são dadas. Você não tem nada menos do que deve ter. Sempre será assim.\nCrowster -- "Então seguimos o que está imposto, eu não tinha como recusar salvar nosso povo, eu devia! Eu não acho que seja injusto, mas é muito confuso alguém como eu ter uma responsabilidade dessas.\nManifestação do Equilibro  -- "A responsabilidade não era sua, não era de ninguém, e era de todos ao mesmo tempo, mas foi você quem escolheu ir por esse caminho, nada o influenciou a não ser você mesmo.\nCrowster -- "Então posso escolher voltar atras de minhas ações? Pelo que sei é proibido pelos três pilares mexer com o espaço-tempo.');

escolha = prompt('Manifestação do Equilibro  -- "Se eu te der uma chance de mudar sua escolha, você mudaria?" ').toLowerCase();

/*5º laço de repetição */
while(escolha != escolhaNao && escolha != escolhaSim){
    console.log('\nInvalido, são decisões acertivas; sim ou nao');
    escolha = prompt('Manifestação do Equilibro  -- "Se eu te der uma chance de mudar sua escolha, você mudaria?" ').toLowerCase();
    
}        
    if(escolha == escolhaSim){
        console.log('\nCrowster -- "Sim, eu mudaria tudo para que menos dano fossem causados. Que mais pessoas pudessem estar com seus desejados e não houvesse tanto sofrimento."\nManifestação do Equilibro  -- "Então tudo bem, mas saiba, que ao voltar no tempo para "corrigir" as coisas, tudo possa ser diferente no futuro que hoje você chama de presente. E isso nem eu sei te dizer como será, mas uma coisa é certa; o equilíbrio, a vida e a morte sempre existirão!\nCrowster volta ao passado para tentar fazer as coisas diferentes, mas ao voltar tudo já esta diferente e ele não entende muito bem e vai atras do Equilibro. Chegando no local ele fica muito irritado e diz que não era isso que ele queria, que ele queria voltar ao passado dele e consertar tudo para que nada tivesse acontecido. Que tudo fosse melhor, mas recebe uma resposta mais confusa ainda.\nManifestação do Equilibro  -- "Eu te disse que não sabia como seria o futuro!"\nCrowster -- "Mas esse não é o futuro, esse é o passado."\nManifestação do Equilibro  -- "Errado! Esse é o seu futuro! Aquele passado que você viveu já foi, não é possível de fato voltar ao passado com todo conhecimento de futuro. Voltar ao passado sabendo do futuro te leva para um futuro diferente, mas nunca ao seu passado. E você, ao voltar, escolheu voltar sabendo dos acontecimentos, o que transformou o passado em seu futuro, mas não no futuro daquelas pessoas.\nCrowster -- "Então se eu quiser mudar o passado eu não posso saber o que aconteceu ou deixar de saber?"\nManifestação do Equilibro  -- "Sim, basicamente sim."\nCrowster -- "Então como eu impediria as coisas de acontecerem se eu não souber como aconteceriam?"\nManifestação do Equilibro  -- "Como eu disse, não podemos ser inibidas, precisamos ser como somos!"\nCrowster -- "O futuro é o único caminho..."\nManifestação do Equilibro  -- "Exatamente, talvez um dia você obtenha o poder para mudar o passado vivido."\nCrowster -- "É possível?\nManifestação do Equilibro  -- "Sim, mas só se tornando um de nós. Já que não vivemos nosso futuro nem nosso presente, vivemos o de vocês, então não temos problemas para ir e vir através do espaço-tempo sem que altere sua realidade ou a nossa."\nManifestação do Equilibro  -- "Nem todos os problemas foram resolvidos, mas você conseguiu alcançar seu objetivo"');
    }
        else{
            console.log('\nManifestação do Equilibro  --"Você é coerente e sábio! Talvez um dia você obtenha o poder para mudar o passado vivido \nCrowster -- "É possível?"\nManifestação do Equilibro  --"Sim, mas só se tornando um de nós. Já que não vivemos nosso futuro nem nosso presente, vivemos o de vocês, então não temos problemas para ir e vir através do espaço-tempo sem que altere sua realidade ou a nossa."\nManifestação do Equilibro  -- "O que você precisa saber é que está tudo bem agora, e que você conseguiu alcançar seu objetivo        ');
        }

if(escolha == escolhaSim){
    ranq = (ranq + 2);
}   
    else{
        ranq = (ranq + 1);
    }

if(ranq == 5){
    console.log('\nVocê concluiu com sucesso os cinco feitos necessários, e se tornou um Master Bruxo');
}   
    else if(ranq == 6){
        console.log('\n'+ nome +' concluiu com sucesso quatro dos cinco feitos necessários, e se tornou um Especialista Bruxo');
    }
    else if(ranq == 7){
        console.log('\n'+ nome +' concluiu com sucesso 3 dos cinco feitos necessários, e se tornou um Bruxo');
    }
    else if(ranq == 8){
        console.log('\n'+ nome +' concluiu com sucesso 2 dos cinco feitos necessários, e se tornou um Aprendiz à Bruxo');
    }
    else if(ranq == 9){
        console.log('\n '+ nome +' concluiu com sucesso 1 dos cinco feitos necessários, e já pode se inscrever para ser um Aprendiz');
    }
    else {
        console.log('\n'+ nome + ' não concluiu nenhum dos cinco feitos e pode se dar qualquer classificação, menos a de que é um bruxo');
    }
    







/*  Rank
Você concluiu com sucesso os cinco feitos necessários, e se tornou um Mestre Bruxo - 5 sim = 5
Você concluiu com sucesso quatro dos cinco feitos necessários, e se tornou um Especialista Bruxo - 4 sim e 1 nao = 6
Você concluiu com sucesso três dos cinco feitos necessários, e se tornou um Bruxo - 3 sim e 2 nao = 7
Você concluiu com sucesso duas dos cinco feitos necessários, e se tornou um Aprendiz à Bruxo - 2 sim e 3 nao = 8
Você concluiu com sucesso um dos cinco feitos necessários, e já pode se inscrever para ser um Aprendiz - 1 sim e 4 nao = 9 
Você não concluiu nenhum dos cinco feitos e pode se dar qualquer classificação, 
menos a de que é um bruxo - 5 nao = 10   */

