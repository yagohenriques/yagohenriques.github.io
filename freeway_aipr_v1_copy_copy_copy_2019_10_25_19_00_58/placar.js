let PlacarVaca = 0;
let PlacarTouro = 0;


function mostraPlacar(){
 textSize(32);
  
fill ("GREEN");
text(PlacarVaca, 150, 28);

fill("BLUE");
text(PlacarTouro, 420, 28);

  
if(yVaca <=15){
  PlacarVaca += 1;
  ponto.play();
  yVaca = 367;
}
if(yTouro <=15){
  PlacarTouro += 1;
  ponto.play();
  yTouro = 367;
  
  }
}