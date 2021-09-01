class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide(); 
    textSize(30);
    text("game Start",120,100);

    Player.getPlayerInfo();

    if(allPlayers!=undefined){
      var display_position = 130;
      for(var plr in allPlayers){
        display_position = display_position + 20;
        if(plr === "player"+player.index){
          fill("red")
        }
        else{
          fill("black")
        }
        textSize(15);
        text(allPlayers[plr].name + ":" + allPlayers[plr].distance ,120, display_position)
      }
    }
    if(keyDown(UP_ARROW)){
     // player.distance = player.distance + 30;
     player.distance += 50;
     player.update()
    }
  }
}
