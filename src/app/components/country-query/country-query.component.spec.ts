import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryQueryComponent } from './country-query.component';

describe('CountryQueryComponent', () => {
  let component: CountryQueryComponent;
  let fixture: ComponentFixture<CountryQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
