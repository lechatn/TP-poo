import Human from './Human.ts';
import Planete from './Planete.ts';
import Population from './Population.ts';

let planete = new Planete();

new Human("Guillaume","H",true,planete);
new Human("Melodie","F",true,planete);

let population = new Population(planete.humans.length);




for (let i = 0; i < 300; i++) {
    planete.addYear();
    console.log("This year, we have a reproduction rate of " + population.getReproductionRate() + " . The population is now " + population.getPopulation() + " and we have " + population.getDeaths() + " deaths");
}

