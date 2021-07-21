var player1, player2
var gameState=1
var PLAY=1
var start=2
var END=0




function preload(){
  sound1=loadSound("Wrong Clakson Sound Effect.mp3")
  character01=loadImage("character1.png")
  character02=loadImage("character2.png")
  endImg = loadImage("end2.jpg")
}

function setup(){
  createCanvas(1000,1000)
 
 player1=createSprite(30,45,40,40)
//  player1.addImage(character01)
 // player1.scale=(0.4)
 // player1.visible=false
  player2=createSprite(90,45,40,40)
 // player2.scale=(0.2)
  //player2.visible=false
 // player2.addImage(character02)
  wall1= createSprite(150,100,20,200)
  wall2= createSprite (80,280,160,20)
  wall3= createSprite (120,450,250,20)
  wall4 = createSprite(240,290,20,500)
  wall5 = createSprite(400,85,300,20)
  wall6 = createSprite(800,85,400,20)
  wall7 = createSprite(570,190,650,20)
  wall8 = createSprite(900,225,20,90)
  wall9 = createSprite(900,350,350,20)
  wall10 = createSprite(735,320,20,100)
  wall11 = createSprite(530,280,420,20)
  wall12 = createSprite(350,410,20,250)
  wall13 = createSprite(415,540,150,20)
  wall14 = createSprite(550,450,20,190)
  wall15 = createSprite(745,540,375,20)
  wall16 = createSprite(465,650,940,20)
  wall17 = createSprite(925,590,20,120)
  wall18 = createSprite(550,800,940,20)
  wall19 = createSprite(600,675,20,40)
  wall20 = createSprite(300,675,20,40)
  wall21 = createSprite(400,820,20,60)
  wall22 = createSprite(750,820,20,60)
  end1 = createSprite(985,915,20,100)

  //end1.addImage(endImg)


  wall19.velocityY=+3
  wall20.velocityY=+3
  wall21.velocityY=+4
  wall22.velocityY=+4

}

function draw(){
  background("white")



  
  //if(gameState===2){
    //background("cyan")
    //textSize(27)
    //fill("red")
    //stroke("white")
    //text("MAZE",530,20)
   // text("To move Player1,right press right arrow",200,150)
  //}
//if(keyDown("space") && gameState==2){
  //gameState=1
//}
  
  if(gameState===1){
    edges=createEdgeSprites()
  wall19.bounceOff(wall18)
  wall19.bounceOff(wall16)
  wall20.bounceOff(wall18)
  wall20.bounceOff(wall16)
  wall21.bounceOff(edges)
  wall21.bounceOff(wall18)
  wall22.bounceOff(edges)
  wall22.bounceOff(wall18)

  player1.collide(wall1)
  player1.collide(wall2)
  player1.collide(wall3)
  player1.collide(wall4)
  player1.collide(wall5)
  player1.collide(wall6)
  player1.collide(wall7)
  player1.collide(wall8)
  player1.collide(wall9)
  player1.collide(wall10)
  player1.collide(wall11)
  player1.collide(wall12)
  player1.collide(wall13)
  player1.collide(wall14)
  player1.collide(wall15)
  player1.collide(wall16)
  player1.collide(wall17)
  player1.collide(wall18)
  player1.collide(edges)
 
  player2.collide(wall1)
  player2.collide(wall2)
  player2.collide(wall3)
  player2.collide(wall4)
  player2.collide(wall5)
  player2.collide(wall6)
  player2.collide(wall7)
  player2.collide(wall8)
  player2.collide(wall9)
  player2.collide(wall10)
  player2.collide(wall11)
  player2.collide(wall12)
  player2.collide(wall13)
  player2.collide(wall14)
  player2.collide(wall15)
  player2.collide(wall16)
  player2.collide(wall17)
  player2.collide(wall18)
  player2.collide(edges)


  player1.velocityX=0
  player1.velocityY=0
  player2.velocityX=0
  player2.velocityY=0
  if(player1.isTouching (end1)){
    gameState=0
  }
  if(player2.isTouching (end1)){
   gameState=0
  }
  if(player1.isTouching (wall19)||player1.isTouching (wall20)||player1.isTouching(wall21)||player1.isTouching(wall22)){
    player1.x=30
    player1.y=45
    //sound1.play()
  }
  if(player2.isTouching (wall19)||player2.isTouching (wall20)||player2.isTouching(wall21)||player2.isTouching(wall22)){
    player2.x=90
    player2.y=75
    //sound1.play()
  }

 

  if(keyDown("right")){
    player1.velocityX=+4
    player1.velocityY=0
  }
  if(keyDown("left")){
    player1.velocityX=-4
    player1.velocityY=0
  }
  if(keyDown("up")){
    player1.velocityX=0
    player1.velocityY=-4
  }
  if(keyDown("down")){
    player1.velocityX=0
    player1.velocityY=+4
  }

  if(keyDown("d")){
    player2.velocityX=+4
    player2.velocityY=0
  }
  if(keyDown("a")){
    player2.velocityX=-4
    player2.velocityY=0
  }
  if(keyDown("w")){
    player2.velocityX=0
    player2.velocityY=-4
  }
  if(keyDown("s")){
    player2.velocityX=0
    player2.velocityY=+4
  }
}


  drawSprites()

   if(gameState===0){
    if(player1.isTouching (end1)){
      fill("red")
      textSize(50)
      text("PLAYER1 WON THE GAME",200,500)
    }
    if(player2.isTouching (end1)){
      fill("blue")
      textSize(50)
      text("PLAYER2 WON THE GAME",200,500)
    }
  }
}
