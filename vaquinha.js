let vaquinhaX = 100
let vaquinhaY = 366
let vaquinhaposX = 100
let vaquinhaposY = 366
let pontuacao = 0

function vaquinhaPos_carregamento(){
  image(vaquinha, vaquinhaX, vaquinhaY, 30, 30);
print(vaquinhaX)
}

//programação
function anda_vaquinha(){
  if(keyIsDown(UP_ARROW)){
    vaquinhaY -= 2;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    if(colisaobaixo()){
      vaquinhaY += 2;
    }
  }

   if(keyIsDown(LEFT_ARROW)){
     if(colisaoesquerda()){
    vaquinhaX -= 2;
     }
  }


   if(keyIsDown(RIGHT_ARROW)){
     if(colisaodireita()){
    vaquinhaX += 2;
     }
  }
}

// < 4
function colisaoesquerda(){
  return vaquinhaX > 0;
}

function colisaobaixo(){
  return vaquinhaY < 366;
}

function colisaodireita(){
  return vaquinhaX < 470;
}

function fazer_pontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 65, 20))
  text(pontuacao, width / 5, 27)
  
  if(vaquinhaY < 6){
     pontuacao++
    p.play();
  vaquinhaX = vaquinhaposX
  vaquinhaY = vaquinhaposY
  
    for(let i = 0; i < cars.length; i += 1){
  carX[i] = posicao_inicial;}
    }
}