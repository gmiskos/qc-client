export class CountryQuery {
  public name: string;
  public countryCode3: string;
  public year: number;
  public population: number;
  public gdp: number;

  constructor(name: string, countryCode3: string, year: number, population: number, gdp: number) {
    this.name = name;
    this.countryCode3 = countryCode3;
    this.year = year;
    this.population = population;
    this.gdp = gdp;
  }
}
