import { randomVec } from "./util.js";
import MovingObject from "./moving_object.js";

class Asteroid extends MovingObject {
    static COLOR = "gray";
    static RADIUS = 25;
    static VEL = 5;
    constructor(obj) {
        super(obj);

        console.log(obj)
        console.log("An Asteroid was born!")

        this.color = Asteroid.COLOR;
        this.radius = Asteroid.RADIUS;
        this.vel = randomVec(Asteroid.VEL); 
    }
}
export default Asteroid;