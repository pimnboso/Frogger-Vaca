
let estrada;
let vaquinha;
let car1;
let car2;
let car3;
let cars;

let c; //colisao
let p; //pontos
let t; //trilha

function preload(){
  vaquinha = loadImage("imagens/ator-1.png");
  estrada = loadImage("imagens/estrada.png");
  car1 = loadImage("imagens/carro-1.png");
  car2 = loadImage("imagens/carro-2.png");
 car3 = loadImage("imagens/carro-3.png");
  c = loadSound("sons/colidiu.mp3");
  p = loadSound("sons/pontos.wav");
  t = loadSound("sons/trilha.mp3");
  cars = [car1, car2, car3, car1, car2, car3]
}