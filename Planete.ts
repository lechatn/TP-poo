import Human from './Human';

export default class Planete {
    private year : 0;

    addYear(humans : Human[]) {
        this.year++;
        humans.forEach(human => {
            human.addAge();
        });
    }
}