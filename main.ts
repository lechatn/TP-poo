//import Platform from './Planete.ts';
import Human from './Human.ts';
import Couple from './Couple.ts';
import Planete from './Planete.ts';


let planete = new Planete();
let human1 = new Human("Arthut","H",false);
let human2 = new Human("Guillaume","H",true);
let human3 = new Human("Melodie","F",true);
let couple1 = new Couple(human1,human2);
let humans = [human1,human2,human3];

planete.addYear(humans);
planete.addYear(humans);

console.log(human1.getAge());


