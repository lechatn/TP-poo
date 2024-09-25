//import Couple from './Couple';

export default class Human {
  private name: string;
  private age: 0;
  private sexe: string;
  private fertility: boolean;

  constructor(name: string, sexe: string, fertility: boolean) {
    this.name = name;
    this.sexe = sexe;
    this.fertility = fertility;
  }

  public addAge() {
    this.age++;
  }

  public getAge() {
    return this.age;
  }

}
