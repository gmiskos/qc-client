import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, merge, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';
import { CountriesResult } from 'src/app/models/countries-result.model';
import { Country } from 'src/app/models/country.model';
import { CountryService } from 'src/app/services/country.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'area', 'countryCode2', ];
  data: Country[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  term$ = new BehaviorSubject<string>('');
  resultsLength = 0;

  constructor(private dataStorageService:DataStorageService) { }
  ngOnInit(): void {
    this.dataStorageService.fetchCountries("true", "desc",1,"").subscribe(
      data=>{
        this.data = data.countries ;
      }
    );
  }

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => 0);
 
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
 
    merge(this.sort.sortChange, this.term$.pipe(debounceTime(1000), distinctUntilChanged()), this.paginator.page)
      .pipe(
        startWith({}),
        switchMap((searchTerm) => {
          return this.dataStorageService!.fetchCountries("true", "desc", this.paginator.pageIndex, (searchTerm && typeof searchTerm == 'string') ? searchTerm.toString() : 'repo:angular/components')
            .pipe(catchError(() => of(null)));
        }),
        map(data => {
          if (data === null) {
            return [];
          }
 
          this.resultsLength = data.totalItems;
          return data.countries;
        })
      ).subscribe(data => this.data = data);
  }

}
