let defs = [
  new Def('Apple', 'Apple is not Banana'),
  new Def('Banana', 'Banana is not Apple'),
  new Def('Cantaloupe', 'Neither Apple nor Banana')
]

export class Def {
  constructor(title:string, description:string) {
    this.title = title;
    this.description = description;
  }
  public title: string;
  public description: string;
}

export class DefStore {
  private defs: Def[];

  constructor() {
    this.defs = defs;
  }

  public getAll() {
    return this.defs;
  }
}
