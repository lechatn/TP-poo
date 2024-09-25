import Human from './Human.ts';
import Planete from './Planete.ts';
import Swim from './Swim.ts';

export default class Aquatic extends Human implements Swim {
    private type : string = "Aquatic";

    constructor(name : string, sexe : string, fertility : boolean, planete : Planete) {
        super(name, sexe, fertility, planete);
    }

    public getType() {
        return this.type;
    }

    public swim() {
        console.log(this.getName() + " is swimming");
    }

}
