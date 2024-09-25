//import Couple from './Couple';

import Planete from "./Planete.ts";

export default class Human {
  private name: string;
  private age: number = 0;
  private sexe: string;
  private fertility: boolean;
  private inCouple: boolean = false;

  constructor(name: string, sexe: string, fertility: boolean, planete: Planete) {
    this.name = name;
    this.sexe = sexe;
    this.fertility = fertility;
    planete.addHuman(this);
  }

  public addAge() {
    this.age++;
  }

  public getAge() {
    return this.age;
  }

  public getSexe() {
    return this.sexe;
  }

  public getFertility() {
    return this.fertility;
  }

  public getInCouple() {
    return this.inCouple;
  }

  public setInCouple() {
    this.inCouple = true;
  }

  public getName() {
    return this.name;
  }

}
