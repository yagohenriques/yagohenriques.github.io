let atropelaVaca = false;
let atropelaTouro = false;

function atropelamento(){
  //Teste carro a carro
  for(let i=0; i<imgCarro.length; i++){
    
    //Vaca
    atropelaVaca = collideRectRect(xVaca, yVaca, 28, 28, xCarro[i], yCarro[i], 50, 30);
    
    if(atropelaVaca){
      //Vaca Atropelada
      yVaca = 368;
    }
    
    //Touro
    atropelaTouro = collideRectRect(xTouro, yTouro, 28, 28, xCarro[i], yCarro[i], 50, 30);
    
    if(atropelaTouro){
      //Touro Atropelado 
      yTouro = 367;
      if(placarTouro > 0)
        placarTouro -= 1;
      atropelou.play();
    }
     if(atropelaVaca){
      //Touro Atropelado 
      yVaca = 367;
      if(placarVaca > 0)
        placarVaca -= 1;
       atropelou.play();
    }
    
  }//For
}//Atropelamento