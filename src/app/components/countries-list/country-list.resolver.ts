import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CountriesResult } from 'src/app/models/countries-result.model';
import { Country } from 'src/app/models/country.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CountryListResolver implements Resolve<CountriesResult> {
  constructor(private dataStorageService: DataStorageService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.dataStorageService.fetchCountries("true", "desc",1,"");
  }
}
