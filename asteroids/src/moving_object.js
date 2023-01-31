// import Asteroid from './asteroid.js'; 

class MovingObject {
    constructor(obj) { // instance variables
        console.log(obj)
        this.pos = obj.pos;
        this.vel = obj.vel; 
        this.radius = obj.radius;
        this.color = obj.color; 
    }

    draw(ctx) { //draws a circle
        ctx.beginPath()
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, false); //x, y, radius, start angle, end angle, clockwise boolean
        ctx.lineWidth = 20;
        ctx.fillStyle = this.color;
        ctx.stroke();
        ctx.fill();
    }
    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1]; 
    }  
}

export default MovingObject;
