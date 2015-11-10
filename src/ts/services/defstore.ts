import {Injectable} from 'angular2/angular2';

export class Def {
  constructor(title:string, description:string) {
    this.title = title;
    this.description = description;
  }
  public title: string;
  public description: string;
}

let DEFS = [
  new Def('Apple', 'Apple is not Banana'),
  new Def('Banana', 'Banana is not Apples'),
  new Def('Cantaloupe', 'Neither Apple nor Banana')
];

@Injectable()
export class DefStore {
  private defs: Def[];

  constructor() {
    this.defs = DEFS;
  }

  public getAll() {
    return this.defs;
  }
}
