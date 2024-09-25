import Human from './Human.ts';
import Planete from './Planete.ts';

export default class Aquatic extends Human {
    private type : string = "Aquatic";

    constructor(name : string, sexe : string, fertility : boolean, planete : Planete) {
        super(name, sexe, fertility, planete);
    }

    public getType() {
        return this.type;
    }

}
