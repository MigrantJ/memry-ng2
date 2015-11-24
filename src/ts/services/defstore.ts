import {Injectable} from 'angular2/angular2';

export class Def {
  constructor(
    public id:number,
    public title:string,
    public description:string
  ) {}
}

let DEFS = [
  new Def(1, 'Apple', '<d l="1">Apple</d> is not <d l="2">Banana</d>'),
  new Def(2, 'Banana', '<d l="2">Banana</d> is not Apples'),
  new Def(3, 'Cantaloupe', 'Neither <d l="1">Apple</d> nor <d l="2">Banana</d>')
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

  public deleteOne(id: number) {
    this.defs.splice(this.defs.findIndex((e) => {return e.id === id}), 1);
  }
}
