import Human from './Human.ts';
import Planete from './Planete.ts';

export default class Couple {
    private human1 : Human;
    private human2 : Human;
    private children : Human[] = [];

    constructor(human1 : Human, human2 : Human, planete : Planete) {
        this.human1 = human1;
        this.human2 = human2;
        planete.addCouple(this);
        human1.setInCouple();
        human2.setInCouple();
    }

    makeChild(couple : Couple, planete : Planete) {
        if (couple.human1.getSexe() != couple.human2.getSexe() && couple.human1.getFertility() && couple.human2.getFertility() && couple.human1.getInCouple() && couple.human2.getInCouple() && this.human1.getAge() > 18 && this.human2.getAge() > 18 && this.human1.getAge() < 50 && this.human2.getAge() < 50) {
            let chance = Math.floor(Math.random() * 2);
            if (chance == 0) {
                console.log("The child can't be born");
            } else {
                let childsexe = Math.floor(Math.random() * 2);
                if (childsexe == 0) {
                    let name = "Child" + Math.floor(Math.random() * 10000);
                    let fertility = Math.floor(Math.random() * 2);
                    let fertil : boolean;
                    if (fertility ==0) {
                        fertil = false;
                    } else {
                        fertil = true;
                    }
                    let child = new Human(name,"H", fertil,planete);
                    couple.children.push(child);
                    console.log("The child is born, it's a boy and his name is " + name + "The parents are " + couple.human1.getName() + " and " + couple.human2.getName());
                } else {
                    let name = "Child" + Math.floor(Math.random() * 10000);
                    let fertility = Math.floor(Math.random() * 2);
                    let fertil : boolean;
                    if (fertility ==0) {
                        fertil = false;
                    } else {
                        fertil = true;
                    }
                    let child = new Human(name,"F", fertil,planete);
                    couple.children.push(child);
                    console.log("The child is born, it's a girl and her name is " + name + "The parents are " + couple.human1.getName() + " and " + couple.human2.getName());
            }
        }
    }
    }
}