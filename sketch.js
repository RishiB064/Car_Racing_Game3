//create the variables for the car
var database;
var canvas,backgroungImg;
var gameState = 0;
var playerCount;
var form,player,game;
var distance = 0;
var allPlayers;


function setup()
{
    //use the firebase database
    database = firebase.database();
    canvas = createCanvas(500,500);
    game = new Game();
    game.getState();
    game.start();
    
}

function draw()
{
    if(playerCount === 4)
    {
        game.update(1);
    }
    if(gameState === 1)
    {
        game.play();
    }
    

}


