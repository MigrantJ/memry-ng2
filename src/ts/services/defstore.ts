import {Injectable} from 'angular2/angular2';

export class Def {
  constructor(
    public id:number,
    public title:string,
    public description:string
  ) {}
}

let DEFS = [
  new Def(1, 'Apple', '<a href="#">Apple</a> is not <deflink d="2">Banana</deflink>'),
  new Def(2, 'Banana', 'Banana is not Apples'),
  new Def(3, 'Cantaloupe', 'Neither Apple nor Banana')
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
