export class CountryStat {
    public year: number;
    public population: number;
    public gdp: number;
    public countryName: string;
    public regionName: string;
    ublic continentName: string;    
  
    constructor(year: number, population: number, gdp: number, countryName: string, regionName: string) {
        this.year = year;
        this.population = population;
        this.gdp = gdp;
        this.countryName = countryName;
        this.regionName = regionName;      
    }
}
