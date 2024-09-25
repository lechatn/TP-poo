import Human from './Human';

export default class Couple {
    private human1 : Human;
    private human2 : Human;
    private children : Human[] = [];

    constructor(human1 : Human, human2 : Human) {
        this.human1 = human1;
        this.human2 = human2;
    }
}