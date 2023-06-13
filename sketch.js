function setup() {
  createCanvas(500, 400);
  t.loop();
}



//quase um sumariokk
function draw() {
  background(estrada);
  vaquinhaPos_carregamento();
  carros();
  anda_carros();
  anda_vaquinha();
  loop_carros();
  passou_da_tela();
  colisao_carros();
  fazer_pontos();
}