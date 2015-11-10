import {Component, Inject, CORE_DIRECTIVES} from 'angular2/angular2';
import {DefStore} from '../services/defstore';

@Component({
  selector: 'memry-list',
  template: `
    <div *ng-for="#def of defs">
      <p>{{def.title}}</p>
    </div>
  `,
  directives: [CORE_DIRECTIVES]
})
export class List {
  private defStore: DefStore;
  private defs;

  constructor(defStore: DefStore) {
    this.defStore = defStore;
    this.defs = this.defStore.getAll();
  }
}
