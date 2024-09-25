export default class Population {
    private reproductionRate: number = 0;
    private population: number;
    private deaths: number = 0;


    constructor(population: number) {   
        this.population = population;
    }

    public getPopulation() {
        return this.population;
    }

    public getReproductionRate() {
        return this.reproductionRate;
    }

    public getDeaths() {
        return this.deaths;
    }

    public setPopulation(population: number) {
        this.population = population;
    }

    public setReproductionRate(reproductionRate: number) {
        this.reproductionRate = reproductionRate;
    }

    public setDeaths(deaths: number) {
        this.deaths = deaths;
    }

}