import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Country } from '../models/country.model';
import { CountryService } from '../services/country.service';
import { CountriesResult } from '../models/countries-result.model';
import { SortDirection } from '@angular/material/sort';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private countryService: CountryService) {}

  fetchCountries(sort: string, order: SortDirection, page: number, q: string) {
    return this.http
      .get<CountriesResult>(
        'http://localhost:8080/api/countries?page='+page+'&size=10&sorted='+sort
      )
      .pipe(
        map(CountriesResult => {
          return CountriesResult;
        }),
        tap(CountriesResult => {
          this.countryService.setCountries(CountriesResult.countries);
        })
      )
  }
}
