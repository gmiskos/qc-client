export class Region {
  public regionId: number;
  public name: string;
  public continentId: number;

  constructor(regionId: number, name: string, continentId: number) {
    this.regionId = regionId;
    this.name = name;
    this.continentId = continentId;
  }
}
