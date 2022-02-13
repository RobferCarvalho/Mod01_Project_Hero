const bruxo = {
    nome: 'Crowster',
    armadura: ['nao'],
    humor: ['Bem humorado'],
    vida: 100,
    atençao: 100,
    energia: 100,
    vigor: 100,
    fome: 5,
    sede: 5,
    
  
  };
  
  
            
  
  //func aleatorio
    
  (function () {
    const rollDice = (min,max) => Math.floor(Math.random() * (max - min) + min);
    return dano = rollDice(1,21);
    })();
  
  
  
  function defesa(dano){
    if(dano === 1){
      if(bruxo.armadura[0] === 'sim'){
        console.log(`O ataque recebido não acertou, você não recebe dano!`);
  
      }else{
        let dmg = dano * 5
        console.log(`Dano sofrido ${dmg}. Por estar sem armadura recebeu todo o dano.`);
      }
    }
    if(dano >= 2 && dano <= 5){
      if(bruxo.armadura[0] === 'sim'){
        let dmg = dano / 2;
        console.log(`Dano aparado pela armadura, sofrendo apenas ${dmg} de dano, equivalente a 50% do dano real`);
  
      }else{
        let dmg = dano * 2
        console.log(`Dano sofrido ${dmg}. Por estar sem armadura recebeu todo o dano.`);
      }
    }
    if(dano >= 6 && dano <= 9){
      if(bruxo.armadura[0] === 'sim'){
        let dmg = dano / 2;
        console.log(`Dano aparado pela armadura, sofrendo apenas ${dmg} de dano, equivalente a 50% do dano real`);
  
      }else{
        let dmg = dano * 2
        console.log(`Dano sofrido ${dmg}. Por estar sem armadura recebeu todo o dano.`);
      }
    }
    if(dano >= 10 && dano <= 14){
      if(bruxo.armadura[0] === 'sim'){
        let dmg = dano / 2;
        console.log(`Dano aparado pela armadura, sofrendo apenas ${dmg} de dano, equivalente a 50% do dano real`);
  
      }else{
        let dmg = dano * 2
        console.log(`Dano sofrido ${dmg}. Por estar sem armadura recebeu todo o dano.`);
      }
    }
    if(dano >= 15 && dano <= 19){
      if(bruxo.armadura[0] === 'sim'){
        let dmg = dano / 2;
        console.log(`Dano aparado pela armadura, sofrendo apenas ${dmg} de dano, equivalente a 50% do dano real`);
  
      }else{
        let dmg = dano * 3
        console.log(`Dano sofrido ${dmg}. Por estar sem armadura recebeu todo o dano.`);
      }
    }
    if(dano === 20){
      if(bruxo.armadura[0] === 'sim'){
        let dmg = dano / 2;
        console.log(`O ataque recebido foi critico e causou ${dmg} de dano, equivalente a 50% do dano real por você estar de armadura. Se estivesse sem armadura teria morrido com esse ataque.`);
  
      }else{
        let dmg = dano * 5
        console.log(`Dano critico sofrido ${dmg}. Por estar sem armadura recebeu todo o dano. E morreu!`);
      }//break; so funciona dentro de um FOR
    }
  }//final da func
  
    
  
  function ataque(dano){ 
    if(dano === 1){
      if(bruxo.humor[0] == 'Mau humorado'){
        let dmg = dano - 1;
        console.log(dmg);
        console.log(`Seu ataque foi horrivel e desengolçado. Você errou (monstro/criatura). Precisa treinar mais ou se concentrar mais.`);
  
      }else{
        let dmg = dano - 1;
        console.log(dmg);
        console.log(`Seu ataque foi horrivel e desengolçado. Você errou a(monstro/criatura). Precisa treinar mais ou se concentrar mais.`);
        bruxo.humor[0] = 'Mau humorado';
      }
    
    }
    if(dano >= 2 && dano <= 5){
      let dmg = dano * 1;
      console.log(`Seu ataque foi muito fraco e causou apenas ${dmg} de dano. Tome cuidado`);
    }
    if(dano >= 6 && dano <= 9){
      let dmg = dano * 2;
      console.log(`Seu ataque acertou e causou ${dmg} de dano.`);
    }
    if(dano >= 10 && dano <= 14){
      let dmg = dano * 2;
      console.log(`Seu ataque foi bom e causou ${dmg} de dano. Ficar longe do combate nao te enferrujou. Parabens!`);
    }
    if(dano >= 15 && dano <= 19){
      let dmg = dano * 3;
      console.log(`Seu ataque foi certeiro e causou ${dmg} de dano. Anda treinando escondido, né!? Muito bem!`);
    }
    if(dano === 20){
      if(bruxo.humor[0] == 'Mau humorado'){
        let dmg = dano - 1;
        let dmg2 = dmg * 5;
        console.log(`Seu ataque foi muito forte e causou ${dmg2} de dano crítico! Quase com 1 golpe so. Excelente, você ainda sabe lutar!`);
    
      }else{
        let dmg = dano *5;
        console.log(`Seu ataque foi muito forte e causou ${dmg} de dano crítico! Com 1 golpe so? Excelente,você não perdeu o jeito `);
      }
    }
  }
  if(bruxo.nome != 'Crowster'){
      ataque(dano);
  }else{
      defesa(dano);
  }
  
  
  
  