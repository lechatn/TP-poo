//import Platform from './Planete.ts';
import Human from './Human.ts';
import Couple from './Couple.ts';
import Planete from './Planete.ts';


let planete = new Planete();

let human1 = new Human("Guillaume","H",true,planete);
let human2 = new Human("Melodie","F",true,planete);




for (let i = 0; i < 100; i++) {
    planete.addYear();
}

console.log("There is " + planete.humans.length + " humans on the planet in " + planete.getYear() + " years");
console.log(planete.humans);
