import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Country } from '../models/country.model';
const baseUrl = 'http://localhost:8080/api/countries';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  countriesChanged = new Subject<Country[]>();
  private countries: Country[] = [];
  constructor(private http: HttpClient) { }

  setCountries(countries: Country[]) {
    this.countries = countries;
    this.countriesChanged.next(this.countries.slice());
  }

  getCountries() {
    return this.countries.slice();
  }

  getCountry(index: number) {
    return this.countries[index];
  }
}
