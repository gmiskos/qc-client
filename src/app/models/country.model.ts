export class Country {
  public countryId: number;
  public name: string;
  public area: string;
  public countryCode2: string;

  constructor(countryId:number, name: string, area: string, countryCode2: string) {
    this.countryId = countryId;
    this.name = name;
    this.area = area;
    this.countryCode2 = countryCode2;
  }  
}
