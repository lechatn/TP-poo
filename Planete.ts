import Human from './Human.ts';
import Couple from './Couple.ts';
import Population from './Population.ts';

export default class Planete {
    private year : number = 200; 
    public humans : Human[] = [];
    public couples : Couple[] = [];


    addYear() {
        this.year++;
        for (let human of this.humans) {
            human.addAge();
        }

        let noCouple : Human[] = [];
        for (let human of this.humans) {
            if (human.getInCouple() == false) {
                noCouple.push(human);
            }
        }

        if ((noCouple.length % 2) != 0) {
            noCouple.pop();
        }

        for (let i = 0; i < noCouple.length; i+=2) {
            new Couple(noCouple[i],noCouple[i+1],this);
        }

        for (let couple of this.couples) {
            couple.makeChild(couple,this);
        }
        
        for (let human of this.humans) {
            let isDead = human.CanDie(human);
            if (isDead) {
                let index = this.humans.indexOf(human);
                this.humans.splice(index,1);
            }
        }

    }

    getYear() {
        return this.year;
    }

    addHuman(human : Human) {
        this.humans.push(human);
    }

    addCouple(couple : Couple) {
        this.couples.push(couple);
    }
}