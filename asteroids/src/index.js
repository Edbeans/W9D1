import Asteroid from './asteroid.js';
import MovingObject from './moving_object.js' 
import Game from './game.js' 

document.addEventListener("DOMContentLoaded", () => {

    // reading the canvas from the html doc
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    
    const dimensions = [1000, 600]

    // drawing black canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, dimensions[0], dimensions[1]);

    // init new game
    const game = new Game();
    game.draw(ctx)
    console.log(game);

});