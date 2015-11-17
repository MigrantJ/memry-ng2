import {Component, Inject, CORE_DIRECTIVES} from 'angular2/angular2';
import {DefPanel} from './defpanel';
import {DefStore} from '../services/defstore';

@Component({
  selector: 'memry-list',
  template: `
    <memry-defpanel
      *ng-for="#def of defs"
      [def]="def"
    >
    </memry-defpanel>
  `,
  directives: [CORE_DIRECTIVES, DefPanel]
})
export class List {
  private defs: any[];

  constructor(private defStore: DefStore) {
    this.defs = this.defStore.getAll();
  }
}
