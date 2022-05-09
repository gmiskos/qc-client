import { Country } from "./country.model";

export class CountriesResult {
  public countries: Country[];
  public currentPage: number;
  public totalItems: number;
  public totalPages: number;

  constructor(countries:Country[], currentPage: number, totalItems: number, totalPages: number) {
    this.countries = countries;
    this.currentPage = currentPage;
    this.totalItems = totalItems;
    this.totalPages = totalPages;
  }  
}
