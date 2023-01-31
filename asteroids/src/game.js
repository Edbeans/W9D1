import Asteroid from "./asteroid";

class Game {
    static DIM_X = 1000;
    static DIM_Y = 600;
    static NUM_ASTEROIDS = 10;

    constructor() {
        this.asteroids = []; // make an array
        this.addAsteroids() // populate it

    }

    addAsteroids() {
        let i = 0
        while (i < Game.NUM_ASTEROIDS) {
            let newPosition = this.randomPosition(Game.DIM_X, Game.DIM_Y) // [x, y]
            let newbornAsteroid = new Asteroid({pos: newPosition})
            this.asteroids.push(newbornAsteroid) //keep pushing randomly positioned asteroids
            i++
        }
    }

    randomPosition(maxX, maxY) { // returns a random coordinate array [x, y], when you give this function the max dimensions you want
        let finalCoordinates = []
        finalCoordinates.push(getRandomPositionFromRange(0, maxX))
        finalCoordinates.push(getRandomPositionFromRange(0, maxY))

        function getRandomPositionFromRange(min, max){ // returns a random num between min and max
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        return finalCoordinates
    }

    draw(ctx) {
        // ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y); //wipes the ctx clean
        this.asteroids.forEach(function(asteroid) {
            asteroid.draw(ctx)
            console.log(asteroid)
        })
    }

    moveObjects() {
        
    }
}

export default Game;