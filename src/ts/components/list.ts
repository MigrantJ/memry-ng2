import {Component, Inject, CORE_DIRECTIVES} from 'angular2/angular2';
import {DefPanel} from './defpanel';
import {Def, DefStore} from '../services/defstore';

@Component({
  selector: 'memry-list',
  template: `
    <section class="center-column" id="def-list-container">
      <memry-defpanel
        *ng-for="#def of defs"
        [def]="def"
      />
    </section>
  `,
  directives: [CORE_DIRECTIVES, DefPanel]
})
export class List {
  private defs: Def[];

  constructor(private defStore: DefStore) {
    this.defs = this.defStore.getAll();
  }
}
