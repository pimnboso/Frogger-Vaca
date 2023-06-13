let posicao_inicial = 600
let carY = [40, 96, 150, 210, 270, 318]
let velocityCar = [2, 4, 3, 2.5, 3, 3.5]
let carX = [600, 600, 600, 600, 600, 600]
let colisao = false
let alturacarros = 50
let comprimentocarros = 40

function carros() {
  for(let i = 0; i < cars.length; i += 1){
  image(cars[i], carX[i], carY[i], 50, 40);
  }
}


function anda_carros(){
  for(let i = 0; i < cars.length; i += 1){
    carX[i] -= velocityCar[i]
  }
}

function loop_carros(){
  for(let i = 0; i < cars.length; i += 1){
    if(passou_da_tela(carX[i])){
    carX[i] = posicao_inicial
  } 
  }
}


function passou_da_tela(carX){
  return carX < -40;
}
//hit = collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);
function colisao_carros(){
  for(let i = 0; i < cars.length; i += 1){
    colisao = collideRectCircle(carX[i], carY[i], alturacarros, comprimentocarros, vaquinhaX, vaquinhaY, 15);
    if(colisao){
  vaquinhaX = vaquinhaposX
  vaquinhaY = vaquinhaposY
      c.play();
if(pontuacao > 0){
      pontuacao--
}
    for(let i = 0; i < cars.length; i += 1){
  carX[i] = posicao_inicial;}
    }
  }
}